import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridList: {
    // width: 700,
  },
  icon: {
    // color: 'rgba(255, 255, 255, 0.54)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 200,
  },

  arrowUpIcon: {
    // position: 'absolute',
    // bottom: -2,
    // left: 'calc(50% - 9px)',
  },
  arrowDownIcon: {
    // position: 'absolute',
    // bottom: -2,
    // left: 'calc(50% - 9px)',
  },

  controls: {
    // display: 'flex',
    // alignItems: 'center',
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  card: {
    position:'relative',
  },
  cardImg: {
    height: 'auto',
    width: 'auto',
    // minHeight: '200px',
    maxHeight: '200px',
    maxWidth: '100%',
    margin: 'auto',
  },
  priceBox: {
    // width: 'auto',
    position:'absolute',
    bottom: 0,
    right: 0,
    backgroundColor:'white',


    borderRadius: '4px',
    // boxShadow: 'inset 0 2px 2px #e9e9e9',
    border: '1px solid #AE0000',


    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  priceBoxText: {
    color:'#AE0000',
  }
}));

export default useStyles;