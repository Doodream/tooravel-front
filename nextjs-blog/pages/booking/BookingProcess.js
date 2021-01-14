'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';


import AddressForm from './BookingProcess/AddressForm.js'
import PaymentForm from './BookingProcess/PaymentForm.js'
import Review from './BookingProcess/Review.js'
import DetailedExpansionPanel from './BookingProcess/Panel'

import {bookingCreate, ajaxTransactionCreate} from './iamport'

import { Map, List, fromJS } from 'immutable';

import useStyles from './BookingProcess.style'

function Copyright() {
  const classes = useStyles();

  return (
    <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tooravel.net/">
        투레벨(Tooravel)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const ScheduleConfrimDialog = ({handleNext, dialogOpen, handleDialogClose, bookFrom, bookTo, voucherStart, voucherEnd, placeFrom, placeTo, address})=>{
  bookFrom = bookTo = new Date();
  placeFrom = placeTo = 1;
  address = "adsfdsa";

  return (
    <Dialog
      open={dialogOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">선택하신 수령/반납 조건이 맞습니까?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {
            (placeFrom==0)?`${bookFrom.format('yyyy년 MM월 dd일 KL 오후 8시')}까지 ${address}에서 우체국 택배 수령`:
              (placeFrom==1)?`${bookFrom.format('yyyy년 MM월 dd일 KL HH시 mm분')}에 인천공항 제1터미널 3층 M열 한진택배에서 성함과 전화번호 뒤 4자리 제시 후 수령`:
                `${bookFrom.format('yyyy년 MM월 dd일 KL HH시 mm분')}에 인천공항 제2터미널 3층 H열 한진택배에서 성함과 전화번호 뒤 4자리 제시 후 수령`
          }
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          {
            (placeTo==0)?`${bookTo.format('yyyy년 MM월 dd일 KL 오후 8시')}까지 우체국 택배 반납`:
              (placeTo==1)?`${bookTo.format('yyyy년 MM월 dd일 KL HH시 mm분')}에 인천공항 제1터미널 3층 M열 한진택배에서 성함과 전화번호 뒤 4자리 제시 후 반납`:
                `${bookTo.format('yyyy년 MM월 dd일 KL HH시 mm분')}에 인천공항 제2터미널 3층 H열 한진택배에서 성함과 전화번호 뒤 4자리 제시 후 반납`
          }
        </DialogContentText>

        {
          (voucherStart!==undefined && voucherEnd!==undefined)? 
            <Alert variant="outlined" severity="success">
              <Typography>
                {`${voucherStart.format('yyyy년 MM월 dd일 KL HH시 mm분')} 출국`}
              </Typography>
              <Typography>
                {`${voucherEnd.format('yyyy년 MM월 dd일 KL HH시 mm분')} 입국`}
              </Typography>

            </Alert>:
            <Alert variant="outlined" severity="warning">
              여행 목적의 대여일 경우 여행 일정 증빙을 해주시면 좀더 저렴한 가격으로 안내받으실수있습니다.
            </Alert>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          취소
        </Button>
        <Button onClick={handleNext} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const steps = [
  {
    label: '수령/반납',
    content: (props)=><AddressForm {...props} />,
    validation: ({placeFrom, placeTo}, callback)=>{
      // console.log(placeFrom, placeTo)
      // if(placeFrom===-1 || placeTo===-1){
      //   alert('수령 반납 방법을 설정해주세요.');
      //   return;
      // }
      return callback();
    },
    dialog: (props)=>(props.dialogOpen)?<ScheduleConfrimDialog {...props} />:'',
  },
  {
    label: '대여상품 선택',
    content: (props)=><PaymentForm {...props} />,
    validation: null,
    dialog: null,
  },
  {
    label: '확인',
    content: (props)=><Review {...props} />,
    validation: ({userData, agree}, callback)=>{
      const username  = userData.get('name')
      const tel  = userData.get('tel')
      const email  = userData.get('email')

      const type = 'card'
      const amount = 1000
      const addr = '주소'

      bookingCreate({
        type, amount, email, username, tel, addr
      }, ()=>{

      })

      // if(name!==null || tel!==null || email!==null || agree!==null){
      //   alert('야');
      //   return;
      // }

      // return callback();
    },
    dialog: null,
  },
];

const initialItemData = (
  ()=>{
    const data = fromJS( window.DATA.items.map((itemList)=>itemList.map(item=>({...item, qty:0}))) )
    delete window.DATA;
    return data
  }
)();

const initialUserData = ( 
  ()=>{
    const data = fromJS( window.USERDATA )
    delete window.USERDATA
    return data
  }
)();

export default function BookingProcess() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);

  const [address, setAddress] = React.useState("");
  const [bookFrom, setBookFrom] = React.useState(undefined);
  const [bookTo, setBookTo] = React.useState(undefined);

  const [placeFrom, setPlaceFrom] = React.useState(-1);
  const [placeTo, setPlaceTo] = React.useState(-1);

  const [voucherStart, setVoucherStart] = React.useState(undefined);
  const [voucherEnd, setVoucherEnd] = React.useState(undefined);

  const [itemStep, setItemStep] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [userData, setUserData] = React.useState(initialUserData)
  const [itemData, setItemData] = React.useState(initialItemData);

  const [agree, setAgree] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  }
  const handleDialogClose = () => {
    setDialogOpen(false);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setDialogOpen(false);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setDialogOpen(false);
  };

  const handleClear = () => {
    setActiveStep(0);
    setBookFrom(undefined);
    setBookTo(undefined);
    setPlaceFrom(-1);
    setPlaceTo(-1);
    setVoucherStart(undefined);
    setVoucherEnd(undefined);
    setItemStep(0);
    setItemData(initialItemData)
    setAgree(false)
  };

  const makeProps = () => ({
    bookFrom, setBookFrom, 
    bookTo, setBookTo, 
    placeFrom, setPlaceFrom, 
    placeTo, setPlaceTo, 
    itemStep, setItemStep,
    voucherStart, setVoucherStart,
    voucherEnd, setVoucherEnd,
    address, setAddress,
    itemData, setItemData,
    userData, setUserData,
    agree, setAgree,
  })

  const props = makeProps()

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            예약
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(({label}, step) => (
              <Step key={label} onClick={()=>setActiveStep(step)}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>

                {
                  // (activeStep === 1)?
                  // <DetailedExpansionPanel 
                  //   className={classes.statusQuo}
                  //   first_heading={"현재 예약 상황"}
                  //   second_heading={""}
                  //   render={() => (
                  //     <Grid container spacing={0}>
                  //       <Grid item xs={12} sm={6}>
                  //         <Typography className={classes.textCenter} variant="h6">
                  //           {(new Date()).format('MM월 dd일 KL HH시 mm분')}
                  //         </Typography>
                  //         <Typography className={classes.textCenter} variant="body2">
                  //           인천공항 제1터미널 3층 M열 한진택배
                  //         </Typography>
                  //       </Grid>
                  //       <Grid item xs={12} sm={6}>
                  //         <Typography className={classes.textCenter} variant="h6">
                  //           {(new Date()).format('MM월 dd일 KL HH시 mm분')}
                  //         </Typography>
                  //         <Typography className={classes.textCenter} variant="body2">
                  //           인천공항 제1터미널 3층 M열 한진택배
                  //         </Typography>
                  //       </Grid>
                  //     </Grid>
                  //   )}
                  // />:""
                }

                {steps[activeStep].content(props)}
                {(steps[activeStep].dialog!==null)?steps[activeStep].dialog({dialogOpen,handleDialogClose,handleNext, ...props}):''}

                <div className={classes.buttons}>
                  <Button variant="outlined" onClick={handleClear} className={classes.button}>
                    처음으로
                  </Button>
                  {activeStep !== 0 && (
                    <Button variant="outlined" onClick={handleBack} className={classes.button}>
                      이전
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    onClick={ ()=>steps[activeStep].validation(props, (steps[activeStep].dialog!==null )? handleDialogOpen:handleNext )}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? '결제' : '진행'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}