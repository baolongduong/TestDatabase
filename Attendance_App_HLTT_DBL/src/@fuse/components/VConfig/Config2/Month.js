import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid, TextField, Divider, MenuItem, Select, FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    minWidth: 60,
    maxWidth: 80,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function Month() {

  const classes = useStyles();
  const [Year, setYear] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
          <FormControl className={classes.formControl}>
            <Select
              label="Phút" 
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={Year}
              onChange={handleChange}
              MenuProps={MenuProps}
            >
              <MenuItem value=""><em>--Phút--</em></MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="30">30</MenuItem>
            </Select>
            </FormControl>
  );
}