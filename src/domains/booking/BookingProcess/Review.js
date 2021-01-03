import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {RentTerms} from './Terms'

import {verifyTel} from '../iamport'

const useStyles = makeStyles(theme => ({
  textInput: {
    margin: theme.spacing(1),
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    marginTop: theme.spacing(2),
    borderLeft: '5px solid #f1573b',
    paddingLeft: '10px',
    fontWeight: '600',
  }
}));

export default function Review(props) {
  const classes = useStyles();

  let {itemData, userData, setUserData, address, agree, setAgree} = props

  itemData = itemData.toJS().flat()

  const handleUserDataChange = (key)=>(event)=>{
    setUserData(userData.set(key, event.target.value));
  }

  const handleAgreeChange = (event)=>{
    setAgree(!agree);
  }
  
  // 주문상세

  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.title} gutterBottom>
        주문상세
      </Typography>

      <Grid container spacing={0}>
        <Grid container spacing={0} item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" className={classes.subtitle} gutterBottom>
              배송 안내
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" style={{margin:"10px", fontWeight:'550'}}>
              수령
            </Typography>
            <Typography variant="h6" style={{margin:"10px"}}>
              2020년 4월 1일 12:00 오전 · 택배
            </Typography>
            <Typography variant="h6" style={{margin:"10px"}}>
              반납
            </Typography>
            <Typography variant="h6" style={{margin:"10px"}}>
              2020년 4월 1일 12:00 오전 · 택배
            </Typography>
          </Grid>
        </Grid> 
        <Grid container spacing={0} item xs={12} sm={6}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" className={classes.subtitle} gutterBottom>
              예약자 정보
              <Button size="small" variant="outlined" onClick={()=>{
                verifyTel((response)=>{
                  setUserData(userData.set('name', response.name));
                  setUserData(userData.set('tel', response.tel));
                })
              }} style={{
                float: "right"
              }}>실명 인증</Button>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.textInput}>
            <TextField
              label="성함"
              // id="outlined-start-adornment"
              fullWidth
              disabled
              value={userData.get('name')}
              // className={clsx(classes.margin, classes.textField)}
              // InputProps={{
              //   startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              // }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.textInput}>
            <TextField
              label="휴대폰 번호"
              // id="outlined-start-adornment"
              fullWidth
              disabled
              value={userData.get('tel')}
              // className={clsx(classes.margin, classes.textField)}
              // InputProps={{
              //   startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              // }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.textInput}>
            <TextField
              label="이메일"
              // id="outlined-start-adornment"
              fullWidth
              value={userData.get('email')}
              onChange={handleUserDataChange('email')}
              // className={clsx(classes.margin, classes.textField)}
              // InputProps={{
              //   startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              // }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>

      <Divider style={{marginTop:'20px', marginBottom:'20px'}} />

      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.subtitle} gutterBottom>
            주문 상품
          </Typography>
          <List disablePadding>
            {itemData.map((item, index) => 
              (item.qty>0)?
                <ListItem className={classes.listItem} key={item.name}>
                  <ListItemText primary={item.name} />
                  <Typography variant="body2">{item.price}원&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                  <Typography variant="body2">{item.qty}개</Typography>
                </ListItem>:""
            )}
            {(itemData.filter(item=>item.qty>0).length>0)?<ListItem className={classes.listItem}>
              <ListItemText primary="총 금액" />
              <Typography variant="subtitle1" className={classes.total}>
                ￦{itemData.reduce((accumulator, currentItem)=>accumulator+Number(currentItem.qty)*Number(currentItem.price),0)}
              </Typography>
            </ListItem>:""}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.subtitle} gutterBottom>
            이용약관
          </Typography>
          <RentTerms />
          <FormControlLabel
            value="end"
            control={<Checkbox checked={agree} onChange={handleAgreeChange} color="primary" />}
            label="대여서비스 이용약관에 동의합니다."
            labelPlacement="end"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
