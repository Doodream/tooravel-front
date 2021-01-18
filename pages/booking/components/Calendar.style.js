import { makeStyles } from '@material-ui/core/styles';

// .react-datepicker__heading-text {
//   font-size: 1.3em !important;
// }

// .react-datepicker__heading-text-container {
//   background-color: #f0f0f0;
//   padding:10px;
// }

// .react-datepicker__day-name, .react-datepicker__day {
//   width: 3.8em;
//   line-height: 3em;
//   margin: 0.166em;
// }

// @media ( max-width: 767px ) {
//   .react-datepicker__day-name, .react-datepicker__day {
//     width: 1.9em;
//     line-height: 1.9em;
//     margin: 0.166em;
//   }
// }

// div.react-datepicker-time__caption{
//   font-size: 1.4em;
// }

// input.react-datepicker-time__input{
//   width: 120px !important;

//   font-size: 1.3em;
//   border-radius: 4px;
//   box-shadow: inset 0 2px 2px #e9e9e9;
//   border: 1px solid #aeaeae;
//   line-height: 16px;
//   padding: 6px 10px 5px;
//   margin: 0px !important;
// }

// react-datepicker makeStyles-container-259
//     h6
//     div
//         button.react-datepicker__navigation
//         react-datepicker__month-container
//             react-datepicker__header
//                 react-datepicker__current-month
//                 react-datepicker__header__dropdown
//                 react-datepicker__day-names
//                     react-datepicker__day-name

//             react-datepicker__month
//                 react-datepicker__week
//                     react-datepicker__day
//         div.react-datepicker__input-time-container
//             div.react-datepicker-time__caption
//             div.react-datepicker-time__input-container
//                 div.react-datepicker-time__input
//                     input.react-datepicker-time__input

const useStyles = makeStyles(theme => ({
    container:{
        [theme.breakpoints.down('xs')]: {
            width: '100%',

            '& div.react-datepicker__month-container': {
                width: '100%',

                '& div.react-datepicker__header': {
                    '& div.react-datepicker__current-month': {
                    },
                    '& div.react-datepicker__header__dropdown': {
                    },
                    '& div.react-datepicker__day-names': {
                        display: 'flex',
                        margin: '0.4rem',

                        '& div.react-datepicker__day-name': {
                            flex: '1',
                        },
                    },
                },
                '& div.react-datepicker__month': {
                    '& div.react-datepicker__week': {
                        display: 'flex',

                        '& div.react-datepicker__day': {
                            flex: '1',

                            width: '3.8em',
                            lineHeight: '3em',
                            margin: '0.166em',
                        },
                    },
                },
            },

            '& div.react-datepicker__input-time-container': {
                width: 'auto',
                '& div.react-datepicker-time__caption': {

                },
                '& div.react-datepicker-time__input-container': {
                    '& div.react-datepicker-time__input': {
                        '& input.react-datepicker-time__input': {

                        },
                    },
                },
            },
        },

        [theme.breakpoints.up('sm')]: {
            '& div.react-datepicker__day': {
                width: '3.8em',
                lineHeight: '3em',
                margin: '0.166em',
            },
        },

        '& div.react-datepicker-time__caption': {
            fontSize: '1.4em',
        },
        '& input.react-datepicker-time__input': {
            width: '130px !important',
            fontSize: '1.3em',
            borderRadius: '4px',
            boxShadow: 'inset 0 2px 2px #e9e9e9',
            border: '1px solid #aeaeae',
            lineHeight: '16px',
            padding: '6px 10px 5px',
            margin: '0px !important',
        },
    },
    header:{
        fontSize: '1.3em !important',
        backgroundColor: '#f0f0f0',
        padding: '10px',
    },
    day:{},
}));

export default useStyles;