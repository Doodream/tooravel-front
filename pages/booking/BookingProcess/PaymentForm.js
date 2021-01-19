import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Divider from '@material-ui/core/Divider';


import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import Paper from '@material-ui/core/Paper';


import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import useStyles from './PaymentForm.style'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// const calculatePrice = (item, timeBlock)=>{
//   if(is_day_price===false){
//     return item.price
//   }
//   else if(itme.pricing_model===null){
//     return 
//   }
//   else{
//     return 
//   }
// }


export default function PaymentForm(props) {
  const classes = useStyles();

  const {itemData, setItemData, voucherEnd, voucherStart} = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


// 항공권 - 항공권

// 택배 - 택배
// 공항 - 공항

  const unitTime = (()=>{
    if (voucherEnd!==undefined || voucherStart!==undefined){
      return (props.voucherEnd-props.voucherStart)/(60*60*4*1000)
    }
    else{
      return 60
      // return (props.bookTo-props.bookFrom)/(60*60*4*1000)
    }
    // default value for dev
  })()

  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      spacing={0}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="고프로 기종 선택" {...a11yProps(0)} />
        <Tab label="브이로그 악세사리" {...a11yProps(1)} />
        <Tab label="수중 촬영 악세서리" {...a11yProps(2)} />
        <Tab label="액티비티 악세서리" {...a11yProps(3)} />
        <Tab label="촬영 편의 옵션" {...a11yProps(4)} />
      </Tabs>

      <Grid key={value} item sm>
        {
          itemData.map((items, index) => (
            <TabPanel key={index} value={value} index={index}>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={0}
              >
                {items.map((item, itemIndex) => (
                  <Grid
                    item
                    sm={6}
                    xs={12}
                    key={itemIndex}
                    style={{
                      marginBottom: '1px',
                    }}
                  >
                    <Card>
                      <Box className={classes.card}>
                        <CardMedia
                          className={classes.cardImg}
                          component="img"
                          alt={item.get('name')}
                          image={item.get('image_url')}
                          title={item.get('name')}
                        />


{
                        // <Box component="span" className={classes.priceBox}>
                        //   <Typography variant="h6" component="h2" align="center" className={classes.priceBoxText}>
                        //     { 
                        //       ( item.get('is_day_price')===false )? item.get('price'):
                        //         ( item.get('pricing_model') )? item.get('pricing_model').get( unitTime.toString() ):
                        //           unitTime*item.get('price')/6
                        //     }원
                        //   </Typography>
                        // </Box>
}

                      </Box>
                      <Divider />
                      <CardContent style={{paddingLeft:'0px', paddingRight:'10px'}}>
                        <Grid container spacing={0}>
                          <Box component="span" style={{width:40}}>
                            <Grid 
                              container 
                              direction="column"
                              justify="center"
                              alignItems="center"

                              item>
                              <Grid item xs>
                                <IconButton aria-label="up" style={{padding:0}} onClick={()=>{
                                  setItemData(itemData.setIn([index, itemIndex,'qty'], item.get('qty')+1))
                                }}>
                                  <KeyboardArrowUpIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs>
                                <Typography gutterBottom variant="h6" component="h2" align="center" style={{margin:0}}>
                                  {item.get('qty')}
                                </Typography>
                              </Grid>
                              <Grid item xs>
                                <IconButton aria-label="down" style={{padding:0}} onClick={()=>{
                                  setItemData(itemData.setIn([index, itemIndex,'qty'], Math.max(0, item.get('qty')-1)))
                                }}>
                                  <KeyboardArrowDownIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Box>
                          <Grid item xs>
                            <Box className={classes.card}>
                              <Typography gutterBottom variant="h6" component="h6">
                                {item.get('name')}
                              </Typography>

                              <Box component="span" className={classes.priceBox}>
                                <Typography variant="h6" component="h2" align="center" className={classes.priceBoxText}>
                                  { 
                                    ( item.get('is_day_price')===false )? item.get('price'):
                                      ( item.get('pricing_model') )? item.get('pricing_model').get( unitTime.toString() ):
                                        unitTime*item.get('price')/6
                                  }원
                                </Typography>
                              </Box>
                            </Box>



                            <Typography variant="body2" color="textSecondary" component="p">
                              {item.get('description')}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))
        }
      </Grid>
    </Grid>
  );
}
