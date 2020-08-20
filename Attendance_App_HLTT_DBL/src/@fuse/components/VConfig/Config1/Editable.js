import React from 'react';
import MaterialTable from 'material-table';
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
  minWidth: 50,   
  fontSize: 'medium', 
  color: 'black',
  fontWeight: 'bolder',
  paddingLeft: 30
}

const cells = {
  textAlign: 'center',  
  fontWeight: 'bolder',
}

export default function Editable() {
  var sott = 1;
  const [state, setState] = React.useState({
    columns:
     [
      { title: 'STT', field: 'stt', type:'numeric', headerStyle: styles3, cellStyle:cells, render: rowData => rowData.tableData.id + 1},       
      { title: 'Họ và Tên', field: 'flname', headerStyle: styles , cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 18 }}
          placeholder = 'Nguyễn Văn A'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.flname},
      { title: 'Ngày sinh', field: 'ngsinh', type:'date', headerStyle: styles, cellStyle:cells,
      editComponent: props => {
        return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} 
                    locale={props.dateTimePickerLocalization}>
               <DatePicker
                      format="dd/MM/yyyy"
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
      render: rowData => {return moment(rowData.ngsinh).format("DD/MM/YYYY")}},
      { title: 'Nguyên quán', field: 'ngquann', lookup: { 1: 'An Giang', 2: 'Bà Rịa - Vũng Tàu', 3: 'Bắc Giang', 4: 'Bắc Kạn', 5: 'Bạc Liêu', 6: 'Bắc Ninh', 7: 'Bến Tre', 8: 'Bình Định', 9: 'Bình Dương', 10: 'Bình Phước', 11: 'Bình Thuận', 12:'Cà Mau', 13: 'Cao Bằng',14: 'Đắk Lắk',15: 'Đắk Nông', 16:'Điện Biên', 17: 'Đồng Nai', 18: 'Đồng Tháp', 19: 'Gia Lai', 20: 'Hà Giang',21: 'Hà Nam', 22: 'Hà Tĩnh', 23: 'Hải Dương',24: 'Hậu Giang',25: 'Hòa Bình', 26: 'Hưng Yên', 27: 'Khánh Hòa',28: 'Kiên Giang', 29: 'Kon Tum', 30: 'Lai Châu',31: 'Lâm Đồng',32: 'Lạng Sơn',33: 'Lào Cai',34: 'Long An',35: 'Nam Định',36: 'Nghệ An',37: 'Ninh Bình',38: 'Ninh Thuận',39: 'Phú Thọ', 40: 'Quảng Bình', 41: 'Quảng Nam',42: 'Quảng Ngãi',43: 'Quảng Ninh',44: 'Quảng Trị', 45: 'Sóc Trăng',46: 'Sơn La',47: 'Tây Ninh', 48: 'Thái Bình', 49:'Thái Nguyên',50: 'Thanh Hóa',51: 'Thừa Thiên Huế',52: 'Tiền Giang',53: 'Trà Vinh',54: 'Tuyên Quang',55: 'Vĩnh Long',56: 'Vĩnh Phúc',57: 'Yên Bái',58: 'Phú Yên',59: 'Cần Thơ',60: 'Đà Nẵng',61: 'Hải Phòng',62: 'Hà Nội',63: 'TP.HCM' }, headerStyle: styles , cellStyle:cells},
      { title: 'Thường trú', field: 'diachi', headerStyle: styles2, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          placeholder = '123, Kp4, Tô Ký, Tân Chánh Hiệp, Q.12, Tp.Hồ Chí Minh'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.diachi},
      { title: 'CMND', field: 'cmnd',headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 12 }}
          placeholder = '000066669999'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.cmnd},
      { title: 'Ngày cấp', field: 'ngcap', type:'date', headerStyle: styles , cellStyle:cells,
      editComponent: props => {
        return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} 
                    locale={props.dateTimePickerLocalization}>
               <DatePicker
                      format="dd/MM/yyyy"
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
      render: rowData => {return moment(rowData.ngcap).format("DD/MM/YYYY")}},
      { title: 'Nơi cấp', field: 'noicap', lookup: { 1: 'An Giang', 2: 'Bà Rịa - Vũng Tàu', 3: 'Bắc Giang', 4: 'Bắc Kạn', 5: 'Bạc Liêu', 6: 'Bắc Ninh', 7: 'Bến Tre', 8: 'Bình Định', 9: 'Bình Dương', 10: 'Bình Phước', 11: 'Bình Thuận', 12:'Cà Mau', 13: 'Cao Bằng',14: 'Đắk Lắk',15: 'Đắk Nông', 16:'Điện Biên', 17: 'Đồng Nai', 18: 'Đồng Tháp', 19: 'Gia Lai', 20: 'Hà Giang',21: 'Hà Nam', 22: 'Hà Tĩnh', 23: 'Hải Dương',24: 'Hậu Giang',25: 'Hòa Bình', 26: 'Hưng Yên', 27: 'Khánh Hòa',28: 'Kiên Giang', 29: 'Kon Tum', 30: 'Lai Châu',31: 'Lâm Đồng',32: 'Lạng Sơn',33: 'Lào Cai',34: 'Long An',35: 'Nam Định',36: 'Nghệ An',37: 'Ninh Bình',38: 'Ninh Thuận',39: 'Phú Thọ', 40: 'Quảng Bình', 41: 'Quảng Nam',42: 'Quảng Ngãi',43: 'Quảng Ninh',44: 'Quảng Trị', 45: 'Sóc Trăng',46: 'Sơn La',47: 'Tây Ninh', 48: 'Thái Bình', 49:'Thái Nguyên',50: 'Thanh Hóa',51: 'Thừa Thiên Huế',52: 'Tiền Giang',53: 'Trà Vinh',54: 'Tuyên Quang',55: 'Vĩnh Long',56: 'Vĩnh Phúc',57: 'Yên Bái',58: 'Phú Yên',59: 'Cần Thơ',60: 'Đà Nẵng',61: 'Hải Phòng',62: 'Hà Nội',63: 'TP.HCM' }, headerStyle: styles , cellStyle:cells},
      { title: 'SĐT', field: 'sdt', headerStyle: styles , cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 11 }}
          placeholder = '01234567891'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.sdt},
      { title: 'Học vấn (Tên trường)', field: 'hvan', headerStyle: styles2 , cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          placeholder = 'Đại Học Hồng Bàng'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.hvan},
      { title: 'Ngày tốt nghiệp', field: 'tnam', type:'date', headerStyle: styles, cellStyle:cells,
      editComponent: props => {
        return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} 
                    locale={props.dateTimePickerLocalization}>
               <DatePicker
                      format="dd/MM/yyyy"
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
      render: rowData => {return moment(rowData.tnam).format("DD/MM/YYYY")}},
      { title: 'Passport', field: 'psport', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 7 }}
          placeholder = '1234567'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.psport},
      { title: 'Bank Holder', field: 'bankholder', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 30 }}
          placeholder = 'Ngân hàng Sacombank'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.bankholder},
      { title: 'Account No.', field: 'accno', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 15 }}
          placeholder = '200341555666777'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.accno},
      { title: 'Email', field: 'email', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 20 }}
          placeholder = 'long123@gmail.com'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.email},
      { title: 'Position', field: 'position', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 15 }}
          placeholder = 'Quản lý'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.position},
      { title: 'Attendance ID', field: 'attendid', headerStyle: styles, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 6 }}
          placeholder = 'A00001'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.attendid},
      { title: 'Note', field: 'note', headerStyle: styles2, cellStyle:cells, 
      editComponent: props => (
        <TextField
          value={props.value}
          inputProps={{ maxLength: 30 }}
          placeholder = 'Chăm chỉ, có cố gắng,...'
          onChange={e => props.onChange(e.target.value)}  
        />
      ),     
      render: rowData => rowData.note},
    ],
    data: [
      {flname: 'Jeon So Ran',ngsinh:'1997-09-03',ngquann:1 ,diachi:'66 Hai Bà Trưng Q.3',cmnd:'11223344',ngcap:'2013-11-03',noicap: 1, sdt:'0903111111',hvan:'Đại học Hoa Sen',tnam:'2015-08-09',psport:'11111111',bankholder:'Ngân hàng BIDV',accno:'000011112222333',email:'soran@thlsoft.com',position:'BA',attendid:'2000AA',note:''},
      {flname: 'Park Min Ho',ngsinh:'1999-11-01',ngquann:63 ,diachi:'72 Lý Thái Tổ Q.3',cmnd:'11223355',ngcap:'2015-12-02',noicap: 63, sdt:'0903222222',hvan:'Đại học Hoa Sen',tnam:'2017-08-03',psport:'22222222',bankholder:'Ngân hàng Agribank',accno:'0000111122223',email:'minho@thlsoft.com',position:'Nhân viên',attendid:'2000BB',note:''},
      {flname: 'Kang Ho Dong',ngsinh:'1999-02-20',ngquann:63 ,diachi:'12 Tô Ký Q.12',cmnd:'11223366',ngcap:'2015-04-04',noicap: 63, sdt:'0903333333',hvan:'Đại học Bách Khoa',tnam:'2017-08-03',psport:'33333333',bankholder:'Ngân hàng ACB',accno:'00001111',email:'dongho@thlsoft.com',position:'Nhân viên',attendid:'2000CC',note:''},
      {flname: 'Jin Kyung Lim',ngsinh:'1996-03-10',ngquann:63 ,diachi:'33 Nguyễn Tri Phương Q.10',cmnd:'11223377',ngcap:'2012-11-10',noicap: 63, sdt:'0903444444',hvan:'Đại học Văn Lang',tnam:'2014-08-03',psport:'44444444',bankholder:'Ngân hàng Đông Á Bank',accno:'000011112222',email:'kyuglim@thlsoft.com',position:'Quản lý nhân sự',attendid:'2000DD',note:''},
     
    ],
  });

  return (
    <MaterialTable
      title="Thông tin nhân viên"
      columns={state.columns}
      data={state.data}
      options={{
        actionsColumnIndex: 21,
        addRowPosition: 'first',
        columnsButton: true,
        maxBodyHeight: 500,
        exportButton: true,
        toolbarButtonAlignment: 'left',
        paging: false,
        showTextRowsSelected: true,
        sorting: false,
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
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                sott++;
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