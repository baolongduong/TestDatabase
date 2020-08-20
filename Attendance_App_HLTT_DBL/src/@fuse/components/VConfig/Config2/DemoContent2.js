
import React from 'react';
import { Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IntegrationReactSelect from '../Config4/Name'
import YearMonthPicker from './ngquan1'
import RebornTable from './TableTest';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function DemoContent2()
{
    const classes = useStyles();
    return (
        <Container maxWidth="xx-l">
            <Grid container spacing={0}>   
                <Grid item xs={2}>
                    <h3 className="tgian">Thời gian</h3>
                </Grid>
                <Grid item xs={4}>
                   <label className="testmonthyear3" id = 'Monthyear2' for="start"><h3>Tháng/năm:</h3></label> <div className="testname3"><YearMonthPicker/></div>
                </Grid>
                <Grid item xs={6}>
                   <label className="testmonthyear4" id = 'EmpName2' for="end"><h3>Họ tên nhân viên:</h3><IntegrationReactSelect className="testname4"/></label>
                </Grid>
                <br/>        
                <Grid item xs={12} className="reborntable">

                <RebornTable/>


                </Grid>   
                
            </Grid>                                
        </Container>
    );
};

export default React.memo(DemoContent2);