import React from 'react';
import { Container, Grid, Button, Divider, TextField, FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectTable from './ProjectTable'
import SettingTime from './Settingtime'
import SettingDate from './Settingdate'
import Month from '../Config2/Month'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function DemoContent3()
{
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} className="gird3" alignContent="center">
                <Grid className="table3" id = 'Dateoff' item xs={7}>
                    <SettingDate/>
                </Grid>          
                <Grid className="table3" id = 'Project' item xs={5}>
                    <ProjectTable/>
                </Grid>
                <Grid item xs={12}>
                    <h2>Quy định chấm công</h2> <br/>
                    <Divider/>     
                </Grid>
                <Grid className = 'st' item xs={3}>
                    <Grid id = 'Starttime3' item xs={12}>Thời gian bắt đầu làm việc </Grid>
                        {SettingTime()}
                        <br/>
                    <Grid id = 'Endtime3' item xs={12}>Thời gian kết thúc làm việc </Grid>
                        {SettingTime()}
                </Grid>
                <Grid className = 'st' item xs={3}>
                    <Grid id = 'Latetimeallow' item xs={12}>Thời gian cho phép đến trễ (Phút)</Grid>
                        <TextField type="number" label="Nhập số phút"/>
                        <br/>
                    <Grid id = 'Earlyleavetimeallow' item xs={12}>Thời gian cho phép về sớm (Phút)</Grid>
                        <TextField type="number" label="Nhập số phút" className = 'sta'/>
                </Grid>
                <Grid className = 'st' item xs={3}>
                    <Grid id = 'Startbreaktime' item xs={12}>Thời gian bắt đầu nghỉ trưa</Grid>
                        {SettingTime()}
                        <br/>
                    <Grid id = 'Endbreaktime' item xs={12}>Thời gian kết thúc nghỉ trưa</Grid>
                        {SettingTime()}
                </Grid>
                <Grid className = 'H3' item xs={3}>
                    <p>Làm tròn chỉ số (Phút)</p>
                    <br/> 
                    <Button id = 'Upround' variant="contained">Làm tròn lên</Button>
                        <br/> <br/> 
                    <Button id = 'Downround' variant="contained">Làm tròn xuống</Button> 
                </Grid>
                    <br/>
                <Grid item xs={12} alignContent = 'center' className="buttonsave"> 
                    <br/>
                    <Button id = 'Savebt' variant="contained">SAVE</Button>                           
                </Grid>

            </Grid>
        </Container>
    );
}

export default React.memo(DemoContent3);