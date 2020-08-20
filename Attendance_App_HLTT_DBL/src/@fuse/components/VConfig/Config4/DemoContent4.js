import React from 'react';
import { Container, Grid, Divider, TextField, Typography} from '@material-ui/core';
import YearMonthPicker from '../Config2/ngquan1'
import CTable from './CTable'
import NameSelect  from './Name'

function DemoContent4()
{
    return (
        <Container maxWidth="xl">
            <Grid container={true} spacing={0}>
                <Grid item xs={5} className = 'table5'>
                    <label className="Monthyear4" id = 'Monthyear4' for="start"><h3>Tháng/năm:</h3></label> <div className="testname"><YearMonthPicker/></div>
                </Grid>                   
                <Grid item xs={4}className = 'table5'>
                    <label className="EmpName4" id = 'EmpName4' for="end"><h3>Họ tên nhân viên:</h3><NameSelect className="testname2"/></label>
                </Grid>
                <Grid item xs={3}className = 'table5'>
                    
                </Grid>
                <Divider/>
                <br/>
                <Grid item xs={12} className = 'table4'>
                    <label> {CTable()}</label>                   
                </Grid>                  
            </Grid>                            
        </Container>  
    );
}

export default React.memo(DemoContent4);
