import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const suggestions = [

{ label: '	Lê Nguyễn Ngọc	Thảo	' },
{ label: '	Nguyễn	Hải	Đăng	' },
{ label: '	Lê Thanh	Vũ	' },
{ label: '	Nguyễn	Kim	Ngân	' },
{ label: '	Hồ	Huy	Khoa	' },
{ label: '	Phạm	Thị Thanh	Ngoan	' },
{ label: '	Lê	Hoài Tường	Ngân	' },
{ label: '	Huỳnh	Võ Tuyết	Ngân	' },
{ label: '	Nguyễn	Minh Nhật	Khang	' },
{ label: '	Lê	Thị Quỳnh	Như	' },
{ label: '	Trần	Minh	Duy	' },
{ label: '	Phạm	Thị Thanh	Bình	' },
{ label: '	Võ	Văn	Quí	' },
{ label: '	Lê	Hồng Ngọc	Uyên	' },
{ label: '	Huỳnh	Quốc	Bảo	' },
{ label: '	Nguyễn	Đức	Toàn	' },
{ label: '	Nguyễn	Hữu	Trọng	' },
{ label: '	Hồ	Nhựt Minh	Thông	' },
{ label: '	Nguyễn	Giáng	Mi	' },
{ label: '	Phạm	Thảo	Nhiên	' },
{ label: '	Huỳnh	Thị Thu	Sương	' },
{ label: '	Đinh	Minh	Huy	' },
{ label: '	Lê	Phương	Khanh	' },
{ label: '	Lý	Thành	Lạc	' },
{ label: '	Nguyễn	Ngọc Hồng	Ân	' },
{ label: '	Dương	Hữu Gia	Hào	' },
{ label: '	Lê	Nguyễn Thanh	Bình	' },
{ label: '	Trần	Bảo	Nghi	' },
{ label: '	Võ	Trí	Đức	' },
{ label: '	Hồ	Minh	Hoàng	' },
{ label: '	Phan	Minh	Lý	' },
{ label: '	Nguyễn	An Kim	Ngân	' },
{ label: '	Thái	Hoàng	Huân	' },
{ label: '	Nguyễn	Hồ	Phương	' },
{ label: '	Phan	Văn Anh	Khoa	' },
{ label: '	Nguyễn	Thị Hồng	Châu	' },
{ label: '	Phan	Xuân	Thảo	' },
{ label: '	Nguyễn	Đinh Ngọc	Trân	' },
{ label: '	Võ	Văn	Minh	' },
{ label: '	Trần	Khai	Quý	' },
{ label: '	Phan	Văn	Tú	' },
{ label: '	Trần	Ngô Tuyết	Ngọc	' },
{ label: '	Hồng		Phi	' },
{ label: '	Nguyễn	Ngọc Gia	Hân	' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 30,
    marginLeft: 10,
  },
  input: {
    display: 'flex',
    paddingTop: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 17,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 17,
  },
  paper: {
    position: 'absolute',
    zIndex: 20,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
          style:
          {
              
          },
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class NameSelect extends React.Component {
  state = {
    single: null,
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder="Họ, tên nhân viên"
            isClearable
          />
        </NoSsr>
      </div>
    );
  }
}

NameSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NameSelect);