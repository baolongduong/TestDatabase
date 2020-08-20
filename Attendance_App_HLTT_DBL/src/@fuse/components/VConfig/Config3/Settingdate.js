import React from 'react';
import MaterialTable, { MTableToolbar, MTableEditField } from 'material-table';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import { TextField, Typography } from '@material-ui/core';
import moment from "moment";

const styles = {
  backgroundColor: '#d4d4d4',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  minWidth: 160,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
}

const styles3 = {
  backgroundColor: '#d4d4d4',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  minWidth: 40,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
}

const cells = {
  textAlign: 'center',  
  fontWeight: 'bolder',
}

export default function SettingDate() {
  
  const [state, setState] = React.useState({
    columns:
     [
      { title: 'STT', field: 'number', type:'numeric', headerStyle: styles3, cellStyle: cells, render: rowData => rowData.tableData.id + 1},
      { title: 'Ngày lễ', field: 'Dayoff', headerStyle: styles3, cellStyle: cells,
      editComponent: props => {
        return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} 
                    locale={props.dateTimePickerLocalization}>
               <DatePicker
                      format="dd/MM"
                      onChange={props.onChange}
                      value={props.value || null}
                      clearable
                      InputProps={{
                               style: {
                                fontSize: 13,
                                textAlign: 'center',
                                maxWidth: 40
                               }
                      }}

                 />
          </MuiPickersUtilsProvider>)
      },
      render: rowData => {return moment(rowData.Dayoff).format("DD/MM")}
        },
      { title: 'Note', field: 'note', headerStyle: styles, cellStyle: cells, 
      editComponent: props => (
        <TextField
        value={props.value}
         inputProps={{ maxLength: 30 }}
       onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.note
    },
    ],

    data: [
      {Dayoff: '03-08', note: 'Quốc tế Phụ Nữ'},
      {Dayoff: '06-01', note: 'Quốc tế Thiếu Nhi'},
      {Dayoff: '05-05', note: 'Quốc tế Lao Động'},
      {Dayoff: '09-02', note: 'Quốc Khánh'},
      {Dayoff: '12-25', note: 'Giáng sinh'},
      {Dayoff: '10-31', note: 'Lễ Halloween'},
    ],
  });

  return (
    <MaterialTable
      title="Ngày lễ"
      columns={state.columns}
      data={state.data}
      options={{
        addRowPosition: 'first',
        actionsColumnIndex: 4,
        paging: false,
        maxBodyHeight: 350,
        headerStyle:
        {
          backgroundColor: '#d4d4d4',
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 'thin',
          borderLeft: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          textAlign: 'center',  
          fontSize: 'medium', 
          color: 'black',
          fontWeight: 'bolder',
          paddingLeft: 20
        }
      }}
     
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}