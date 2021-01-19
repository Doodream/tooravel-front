import React from 'react';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ButtonBase from '@material-ui/core/ButtonBase';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import Home from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box'

import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';

import CustomizedSwitches from '../components/Switch'
import InputWithIcon from '../components/TextInput'
import DetailedExpansionPanel from './Panel'
import {PostDatePicker, AirportDateTimePicker, VoucherPicker} from '../components/Calendar'

import useStyles from './AddressForm.style'
import "react-datepicker/dist/react-datepicker.css";
// import "./cal.css";


// Use Case
/*
  1. 택배, 공항 수령에 대한 이해
  2. 


*/

const placeFromList = [
  {
    url: 'http://mblogthumb4.phinf.naver.net/MjAxNzA5MThfMTc2/MDAxNTA1NzIzNjk2ODU0.Yu7lTgqaAo4-dKtNgW3gY8lMu6hokeQ3PlX4wIN4q0og.dW9hJy_mQLrpjAd_alSrbinrIbOTB21pb8ho08FNkJog.JPEG.hsview/place_6771381661505723372670.jpg?type=w800',
    title: '택배 수령(무료)',
    descList: [
      ['선택하신 날짜에 우체국 택배 통해서 수령가능하십니다.', '(물품 상태와 일정에 따라 다른 방법으로 대체될 수 있으며 따로 안내드립니다.)'],
      ['선택하신 날짜에 우체국 택배 통해서 수령가능하십니다.', '(물품 상태와 일정에 따라 다른 방법으로 대체될 수 있으며 따로 안내드립니다.)'],
      ['선택하신 날짜에 우체국 택배 통해서 수령가능하십니다.', ],
    ],
    detail: '{address}에서 우체국 택배',
    width: '40%',
    leftSection: ({time, setTime})=>(
      <PostDatePicker
        date={time}
        setDate={setTime}
      />
    ),
    rightSection: ({address, setAddress, time, classes})=>
      <InputWithIcon 
        label="수령하실 주소를 기재해주세요."
        value={address}
        onChange={setAddress}
        icon={()=><Home />}
      />,
  },
  {
    url: 'https://t1.daumcdn.net/cfile/tistory/9974C9455A9D689C04',
    title: '인천공항 제1터미널 (4000원)',
    detail: '인천공항 제1터미널 3층 M열 한진택배',
    descList: [
      ['선택하신 시간에 인천공항 제1터미널 3층 M열 한진택배에서 예약자 성함과 전화번호 뒤 4자리 제시 후 수령 가능하십니다.', '익일에 바로 수령하시는 경우 예약 후 담당자에게 연락부탁드립니다'],
      ['예약해주신 물품은 서울시 동대문구 사무실에서 인천공항으로', '익일에 바로 수령하시는 경우 예약 후 담당자에게 연락부탁드립니다'],
    ],
    width: '30%',
    leftSection: ({time, setTime})=>(
      <AirportDateTimePicker
        time={time}
        setTime={setTime}
      />
    ),
    rightSection: ()=><React.Fragment></React.Fragment>,
  },
  {
    url: 'https://www.diawings.com/data/editor/1911//thumb-2130644812_fyFQr6Kg_9bd1228e0172465b87524c93368d927380fac434_600x365.jpg',
    title: '인천공항 제2터미널 (4000원)',
    detail: '인천공항 제2터미널 3층 H열 한진택배',
    descList: [
      ['선택하신 시간에 인천공항 제2터미널 3층 H열 한진택배에서 예약자 성함과 전화번호 뒤 4자리 제시 후 수령 가능하십니다.', '익일에 바로 수령하시는 경우 예약 후 담당자에게 연락부탁드립니다'],
      ['제2터미널 3층 H열 한진택배 운영시간은 오전 6시 ~ 오후 10시30분 입니다.', '익일에 바로 수령하시는 경우 예약 후 담당자에게 연락부탁드립니다'],
    ],
    width: '30%',
    leftSection: ({time, setTime})=>(
      <AirportDateTimePicker
        time={time}
        setTime={setTime}
      />
    ),
    rightSection: ()=><React.Fragment></React.Fragment>,
  },
]

const placeToList = [
  {
    url: 'http://mblogthumb4.phinf.naver.net/MjAxNzA5MThfMTc2/MDAxNTA1NzIzNjk2ODU0.Yu7lTgqaAo4-dKtNgW3gY8lMu6hokeQ3PlX4wIN4q0og.dW9hJy_mQLrpjAd_alSrbinrIbOTB21pb8ho08FNkJog.JPEG.hsview/place_6771381661505723372670.jpg?type=w800',
    title: '택배 반납(무료)',
    detail: '{address}에서 우체국 택배',
    descList: [
      ['우체국 택배 통해서 착불로 발송해주세요.', '우체국 택배 반납이 어려운 경우 편의점 택배를 이용하시길 바랍니다.'],
    ],
    width: '40%',
    leftSection: ({time, setTime})=>(
      <PostDatePicker
        date={time}
        setDate={setTime}
      />
    ),
    rightSection: ()=><React.Fragment></React.Fragment>,
  },
  {
    url: 'https://t1.daumcdn.net/cfile/tistory/9974C9455A9D689C04',
    title: '인천공항 제1터미널 (4000원)',
    detail: '인천공항 제1터미널 3층 M열 한진택배',
    descList: [
      ['우체국 택배 통해서 착불로 발송해주세요.', '우체국 택배 반납이 어려운 경우 편의점 택배를 이용하시길 바랍니다.'],
    ],
    width: '30%',
    leftSection: ({time, setTime})=>(
      <AirportDateTimePicker
        time={time}
        setTime={setTime}
      />
    ),
    rightSection: ()=><React.Fragment></React.Fragment>,
  },
  {
    url: 'https://www.diawings.com/data/editor/1911//thumb-2130644812_fyFQr6Kg_9bd1228e0172465b87524c93368d927380fac434_600x365.jpg',
    title: '인천공항 제2터미널 (4000원)',
    detail: '인천공항 제2터미널 3층 H열 한진택배',
    descList: [],
    width: '30%',
    leftSection: ({time, setTime})=>(
      <AirportDateTimePicker
        time={time}
        setTime={setTime}
      />
    ),
    rightSection: ()=><React.Fragment></React.Fragment>,
  },
]

function PlaceButtons(props){
  const classes = useStyles();
  const placeList = props.placeList;
  const setPlace = props.setPlace;

  return (
    <div className={classes.root}>
      {placeList.map((place, index) => (
        <ButtonBase
          focusRipple
          key={place.title}
          className={classes.place}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: place.width,
          }}
          onClick={()=>setPlace(index)}
        >
          <span
            className={classes.placeSrc}
            style={{
              backgroundImage: `url(${place.url})`,
            }}
          />
          <span className={classes.placeBackdrop} />
          <span className={classes.placeButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.placeTitle}
            >
              {place.title}
              <span className={classes.placeMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

function PlaceAndTimeForm(props){
  const classes = useStyles()
  const {placeList, isSelected, method, place, setPlace, time, setTime, address, setAddress} = props;

  const descriptions = (place!==-1)? placeList[place].descList.map(
    ([primaryText,secondaryText], index)=>
    <ListItem key={index}>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText!==undefined ? secondaryText : ""}
      />
    </ListItem>
  ):""

  return (
    <React.Fragment>
      <Box m="auto">
        <Typography variant="h6" gutterBottom>
          {method.title} 방법 선택
        </Typography>
      </Box>

      <PlaceButtons 
        placeList={placeList}
        setPlace={setPlace}
      />

      
      {(place!==-1)?
      <React.Fragment>
        <Grid item xs={12} sm={5} style={{marginTop:"10px"}}>
          {
            placeList[place].leftSection({time, setTime})
          }
        </Grid>
        <Grid item xs={12} sm={7} container spacing={0}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              안내
            </Typography>
            <List dense={true}>
              {descriptions}
            </List>
          </Grid>
          <Grid item xs={12} md={12}>
            {placeList[place].rightSection({address, setAddress, time, classes})}
          </Grid>
          <Typography variant="h6" gutterBottom>
            {
              // `${time.format('yyyy년 MM월 dd일 KL HH시 mm분')}에 인천공항 제2터미널 3층 H열 한진택배에서 성함과 전화번호 뒤 4자리 제시 후 수령`
            }
          </Typography>
        </Grid>
      </React.Fragment>:""}
    </React.Fragment>
  );
}


export default function AddressForm(props) {
  const placeFrom = props.placeFrom;
  const bookFrom = props.bookFrom;
  const setPlaceFrom = props.setPlaceFrom;
  const setBookFrom = props.setBookFrom;

  const placeTo = props.placeTo;
  const bookTo = props.bookTo;
  const setPlaceTo = props.setPlaceTo;
  const setBookTo = props.setBookTo;

  const voucherStart = props.voucherStart;
  const voucherEnd = props.voucherEnd;
  const setVoucherStart = props.setVoucherStart;
  const setVoucherEnd = props.setVoucherEnd;

  const address = props.address;
  const setAddress = props.setAddress;

  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item container xs={12} sm={12} spacing={0} style={{
          borderBottom:'0.02rem solid',
          paddingBottom:'30px',
          marginBottom:'30px',
        }}>
          <PlaceAndTimeForm 
            placeList={placeFromList} 
            method={{
              title: '수령',
            }}
            isSelected={(placeFrom!==-1)?true:false}
            place={placeFrom}
            setPlace={setPlaceFrom}
            time={bookFrom}
            setTime={setBookFrom}

            address={address}
            setAddress={setAddress}
          />
        </Grid>
        <Grid item container xs={12} sm={12} spacing={0} style={{
          borderBottom:'0.02rem solid',
          paddingBottom:'30px',
          marginBottom:'30px',
        }}>
          <PlaceAndTimeForm 
            placeList={placeToList} 
            method={{
              title: '반납',
            }}
            isSelected={(placeTo!==-1)?true:false}
            place={placeTo}
            setPlace={setPlaceTo}
            time={bookTo}
            setTime={setBookTo}

            address={address}
            setAddress={setAddress}
          />
        </Grid>

        <Grid item container xs={12} sm={12} spacing={0}>
          <DetailedExpansionPanel 
            first_heading={"항공권 증빙"}
            second_heading={"증빙하시면 출입국 시간만 계산됩니다."}
            render={() => (
              <VoucherPicker 
                voucherStart={voucherStart}
                voucherEnd={voucherEnd}
                setVoucherStart={setVoucherStart}
                setVoucherEnd={setVoucherEnd}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
