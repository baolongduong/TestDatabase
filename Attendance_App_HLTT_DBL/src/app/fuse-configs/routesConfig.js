import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {InformationConfig} from 'app/main/InformationF/InformationConfig';
import {GetdataConfig} from 'app/main/GetData/GetdataConfig';
import {SettingtimeConfig} from 'app/main/Setting Time/SettingtimeConfig';
import {RecordConfig} from 'app/main/Attendance Record/RecordConfig';


const routeConfigs = [
    InformationConfig,
    GetdataConfig,
    SettingtimeConfig,
    RecordConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact: true,
        component: () => <Redirect to="/Information"/>,
    }
];

export default routes;
