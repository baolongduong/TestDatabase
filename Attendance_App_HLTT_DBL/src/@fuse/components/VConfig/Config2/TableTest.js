import React from 'react';
import MaterialTable from 'material-table';
import { TimePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import ProjectTable from '../Config3/ProjectTable'

const styles = {
  backgroundColor: '#d4d4d4',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  minWidth: 200,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',

}

const styles2 = {
  backgroundColor: '#d4d4d4',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  minWidth: 400,   
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
  minWidth: 200,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
}
const styles4 = {
  backgroundColor: '#d4d4d4',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  borderBottom: 'none',
  textAlign: 'center',
  minWidth: 200,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
}
const cells2 = {
  borderColor: '#d4d4d4',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderLeft: 'none',
  borderTop: 'none',
  textAlign: 'center',
  fontWeight: 'bolder',
}
const cells = {
  textAlign: 'center',  
  fontWeight: 'bolder',
}

export default function RebornTable() {
  
  const [state, setState] = React.useState({
    
    columns: [
      { title: 'Thời gian vào', field: 'times', type:'time', headerStyle: styles, cellStyle:cells,editable:"never",render: rowData => {return moment(rowData.times).format("HH:mm") } },       
      { title: 'Thời gian ra', field: 'timed', type:'time', headerStyle: styles , cellStyle:cells,editable:"never", render: rowData => {return moment(rowData.timed).format("HH:mm") }},
      { title: 'Đi trễ (P)', field: 'latetime', type:'time', headerStyle: styles3, cellStyle:cells ,editable:"never",render: rowData => {return moment.duration(rowData.latetime, "HH:mm").asMinutes() }},
      { title: 'Về sớm (P)', field: 'earlytime', type:'time' , headerStyle: styles3 , cellStyle:cells,editable:"never",render: rowData => {return moment.duration(rowData.earlytime, "HH:mm").asMinutes() }},
      { title: 'Thời gian làm việc', field: 'worktime',type:'time', headerStyle: styles3, cellStyle:cells,editable:"never",render: rowData => {return moment.duration(rowData.worktime,"HH:mm").add(rowData.timed,"HH:mm").subtract(rowData.times,"HH:mm").asHours() -1} },
      { title: 'Thời gian OT', field: 'ottime',type:'time', headerStyle: styles3, cellStyle:cells,editable:"never",render: rowData => {return moment.duration(rowData.ottime,"HH:mm").add(rowData.worktime,"hours").asHours()}},
      { title: 'Thời gian làm việc tại nhà', field: 'hometime', headerStyle: styles3 , cellStyle:cells,render: rowData => {return moment.duration(rowData.hometime, "HH:mm").asHours()}},
      { title: 'Cuối tuần', field: 'weekend',lookup: { 1: 'Có', 2: 'Không',}, headerStyle: styles3 , cellStyle:cells,editable:"never"},
      { title: 'Lễ', field: 'holiday',lookup: { 1: 'Có', 2: 'Không',}, headerStyle: styles3 , cellStyle:cells,editable:"never"},
      { title: 'Giờ công', field: 'finaltime',type:'time', headerStyle: styles4 , cellStyle:cells2,editable:"never",render: rowData =>{return moment.duration(rowData.finaltime, "HH:mm").asHours()}},
      { title: 'Project', field: 'prj', headerStyle: styles, cellStyle:cells}, 
      { title: 'Board Task ID', field: 'boardtks', lookup: { 1: 'A001', 2: 'A002',}, headerStyle: styles, cellStyle:cells},
    ],
    data: [
     {times:{hours:8,minutes:0},timed:{hours:21,minutes:0},latetime:null,earlytime:null,worktime:null,ottime:null,hometime:null,finaltime:'00:00',weekend:2,holiday:2,prj:'Chat App', boardtks:1},
     
    ],
  });

  return (
    <MaterialTable
    title="Báo cáo chấm công"
      columns={state.columns}
      data={state.data}
      options={{
        actionsColumnIndex: 13,
        search: true,
        addRowPosition: 'first',
        columnsButton: true,
        maxBodyHeight: 500,
        exportButton: true,
        toolbarButtonAlignment: 'left',
        paging: false,
        showTextRowsSelected: true,
        sorting: false,
        exportAllData: true,
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
      localization={{
        pagination: {
            labelDisplayedRows: '{from}-{to} of {count}'
        },
        toolbar: {
            nRowsSelected: '{0} row(s) selected'
        },
        body: {
            emptyDataSourceMessage: 'No records to display',
            filterRow: {
                filterTooltip: 'Filter'
            },
        },
    }}
      editable={{
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
      }}
    />
  );

}