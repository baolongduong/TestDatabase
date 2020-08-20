import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Divider, MenuItem, Select, FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
    <Grid item xs={3}>
        <Divider/>
        <h2>Năm</h2>
        <FormControl className={classes.formControl}>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={Year}
            onChange={handleChange}
            MenuProps={MenuProps}
            >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2026">2026</MenuItem>  
            <MenuItem value="2027">2027</MenuItem>  
            <MenuItem value="2028">2028</MenuItem>
            </Select>
        </FormControl>
    </Grid>
  );
}