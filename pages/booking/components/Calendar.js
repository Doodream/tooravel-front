import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';

import DatePicker, {
    CalendarContainer
} from "react-datepicker";

import getDay from 'date-fns/getDay';
import addDays from 'date-fns/addDays';
import ko from 'date-fns/locale/ko';
import InputWithIcon from './TextInput'

import useStyles from './Calendar.style'

import clsx from 'clsx'

Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";
    const weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    const weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let d = this, h;

    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear(); // 년 (4자리)
            case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
            case "M": return d.getMonth().toString(); // 월 (2자리)
            case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
            case "dd": return d.getDate().zf(2); // 일 (2자리)
            case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
            case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)
            case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
            case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)
            case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
            case "mm": return d.getMinutes().zf(2); // 분 (2자리)
            case "ss": return d.getSeconds().zf(2); // 초 (2자리)
            case "a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
            default: return $1;
        }
    });
};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };

const baseCalendarOpt = {
    // className: "booking-datepicker",
    inline: true,
    locale: ko,
    minDate: addDays(new Date(), 0),
}


const AirportTimeInput = ({value,onChange})=>(
    <InputWithIcon
        icon={()=><LocalAirportIcon />}
        value={value}
        onChange={onChange}
    />
)

const postCalendarOpt = {
    ...baseCalendarOpt,

    filterDate:(date) => {
        const day = getDay(date);
        return day !== 0 && day !== 1;
    },
}
const airportCalendarOpt = {
    ...baseCalendarOpt, 
    minDate: addDays(new Date(), 1),
    timeInputLabel: "시간 :",
    // dateFormat: "MM/dd/yyyy h:mm aa",
    showTimeInput: true,
    // timeFormat: "HH:mm",
}

const BaseCalendarContainer = (props) => {
    const {className, children} = props;

    const classes = useStyles()

    return (
        <CalendarContainer className={clsx(className, classes.container)}>
            <Typography className={classes.header} variant="h6">
                {props.title}
            </Typography>
            <div style={{ position: "relative" }}>
                {children} 
                <div style={{ clear: "both" }}></div>
            </div>
        </CalendarContainer>
    );
};

const PostCalendarContainer = (props)=> BaseCalendarContainer({title:'택배 수령 원하시는 일자를 입력해주세요.', ...props})
const AirportCalendarContainer = (props)=> BaseCalendarContainer({title:'공항 수령 원하시는 일자와 시간을 입력해주세요.', ...props})
const VoucherStartCalendarContainer = (props)=> BaseCalendarContainer({title:'항공권 출국 날짜와 시간을 입력해주세요.', ...props})
const VoucherEndCalendarContainer = (props)=> BaseCalendarContainer({title:'항공권 입국 날짜와 시간을 입력해주세요.', ...props})

export const PostDatePicker = (props)=>{
    const {date, setDate} = props;

    return (
        <DatePicker {
                ...postCalendarOpt
            }

            selected={date}
            onChange={date => setDate(date)}
            calendarContainer={PostCalendarContainer}
        />
    )
}
export const AirportDateTimePicker = (props)=>{
    const {time, setTime} = props;

    return (
        <DatePicker {
                ...{
                    ...airportCalendarOpt,
                    selected: time,
                    onChange: time => setTime(time),
                }
            }
            calendarContainer={AirportCalendarContainer}

        />
    )
}

export function VoucherPicker(props){
    const voucherStart = props.voucherStart;
    const voucherEnd = props.voucherEnd;
    const setVoucherStart = props.setVoucherStart;
    const setVoucherEnd = props.setVoucherEnd;

    const classes = useStyles();

    React.useEffect(() => {
        if(voucherStart>voucherEnd){
            setVoucherEnd(voucherStart)
        }
    }, [voucherStart]);


    // className={classes.container}
    // calendarClassName={classes.calender}
    // dayClassName={classes.day}
    return (
        <Grid container spacing={0} justify="space-around" alignItems="center">
            <Grid item xs={12} sm={5}>
                <DatePicker
                    {...airportCalendarOpt}

                    selected={voucherStart}
                    onChange={date => setVoucherStart(date)}
                    selectsStart
                    startDate={voucherStart}
                    endDate={voucherEnd}
                    timeInputLabel="출국 시간 :"

                    calendarContainer={VoucherStartCalendarContainer}
                />
            </Grid>
            <Grid item xs={12} sm={5}>
                <DatePicker
                    {...airportCalendarOpt}

                    selected={voucherEnd}
                    onChange={date => setVoucherEnd(date)}
                    selectsEnd
                    startDate={voucherStart}
                    endDate={voucherEnd}
                    minDate={voucherStart}
                    timeInputLabel="입국 시간 :"

                    calendarContainer={VoucherEndCalendarContainer}
                />
            </Grid>
        </Grid>
    )
}
