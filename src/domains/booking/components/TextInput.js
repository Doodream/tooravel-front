import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import Home from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Sample() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Home />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Home />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Home />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}



export default function InputWithIcon(props) {
  const classes = useStyles();

  const {icon, label, value, onChange} = props;

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="stretch">
        {(icon!==undefined)?
        <Grid item>
          <IconButton aria-label="icon">
            {icon()}
          </IconButton>
        </Grid>
        :""
        }
        <Grid item xs>
          <TextField 
            fullWidth
            id="input-with-icon-grid" 
            label={label}
            value={value}
            onChange={event=>onChange(event.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  )
}