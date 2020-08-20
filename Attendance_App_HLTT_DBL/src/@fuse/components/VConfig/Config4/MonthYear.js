import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

export default function YearMonthPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        variant="inline"
        openTo="year"
        views={["year", "month"]}
        label="Year and Month"
        helperText="Start from year selection"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

