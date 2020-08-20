import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function YearMonthPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <DatePicker
        views={["year", "month"]}
        label=""
        helperText=""
        minDate={new Date("2016-12-01")}
        maxDate={new Date("2021-01-01")}
        value={selectedDate}
        format="yyyy/MM"
        onChange={handleDateChange}
        variant="inline"
      />
    </MuiPickersUtilsProvider>
  );
}

export default YearMonthPicker;