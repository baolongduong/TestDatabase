import React from 'react';
import MaterialTable from 'material-table';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
  borderStyle: 'solid',
  textAlign: 'center',  
  fontWeight: 'bolder',
}

export default function ProjectTable() {

  const [state, setState] = React.useState({
    
    columns: [
      { title: 'Project ID', field: 'ID', type: 'numeric', editable:'onAdd', headerStyle: styles3, cellStyle: cells, 
      editComponent: props => (
        <TextField
        value={props.value}
        inputProps={{ 
          maxLength: 4,
          maxWidth: 4
        }}
       onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.ID,},
      { title: 'Project Name', field: 'Name', headerStyle: styles, cellStyle: cells, 
      editComponent: props => (
        <TextField
        value={props.value}
        inputProps={{ 
          maxLength: 20,
        }}
       onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.Name,},
      
    ],
    data: [
      {ID: 1449, Name: 'Attendance App' },
      {ID: 1450, Name: 'Chat App' },
      {ID: 1451, Name: 'Calculator App' },
      {ID: 1452, Name: 'Q&A App' },
      {ID: 1453, Name: 'Market App' },
      {ID: 1454, Name: 'Shippper App' },
      {ID: 1455, Name: 'Face App' },
      {ID: 1456, Name: 'Actress Management App' },
    ],
  });
  return (
    <MaterialTable
    title="Project"
      columns={state.columns}
      data={state.data}
      options={{
        addRowPosition: 'first',
        actionsColumnIndex: 3,
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