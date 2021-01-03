import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    
    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('sm')]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '70px',
    },
    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 1000,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  paper: {
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),


    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      // marginTop: theme.spacing(6),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3),
    },


    // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    //   marginTop: theme.spacing(6),
    //   marginBottom: theme.spacing(6),
    //   padding: theme.spacing(3),
    // },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
  },


  statusQuo: {
    marginBottom: theme.spacing(1)
  },
  textCenter: {
    textAlign: 'center',
  },

  copyright: {
    marginTop: '30px',
  }

}));

export default useStyles;