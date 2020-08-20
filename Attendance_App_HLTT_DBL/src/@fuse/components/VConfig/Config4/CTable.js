import React from 'react';
import MaterialTable from 'material-table';

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
  minWidth: 50,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
}

const cells = {
  textAlign: 'center',  
  fontWeight: 'bolder',
}

export default function CTable() {
  const [state, setState] = React.useState({
    columns:
     [
      { title: 'STT', field: 'stt', type:'numeric', headerStyle: styles3, cellStyle: cells, editable:"never"},       
      { title: 'Thời gian chấm công', field: 'time', headerStyle: styles2, cellStyle: cells},
      { title: 'Ngày chấm công', field: 'date', type:'date', headerStyle: styles2, cellStyle: cells},
    ],
    data: [
      {stt:	1	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	2	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	3	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	4	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	5	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	6	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	7	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	8	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	9	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	10	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	11	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	12	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	13	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	14	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	15	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	16	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	17	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	18	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	19	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	20	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	21	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	22	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	23	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	24	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	25	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	26	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	27	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	28	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	29	, time: '08:15 - 17:20', date: '2018-02-20'},
      {stt:	30	, time: '08:15 - 17:20', date: '2018-02-20'},   
    ],
  });

  return (
    <MaterialTable
      title="Bảng chấm công"
      columns={state.columns}
      data={state.data}
      options={{
        search: true,
        maxBodyHeight: 500,
        paging: false,
        sorting: true,
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
        body: {
            emptyDataSourceMessage: 'No records to display',
            filterRow: {
                filterTooltip: 'Filter'
            },
        },
    }}
     
    />
  );
}