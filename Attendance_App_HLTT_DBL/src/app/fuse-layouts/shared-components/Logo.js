import React from 'react';
import {Typography} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import thllogo from './logoTHL.png'

const useStyles = makeStyles(theme => ({
    root      : {
        '& .logo-icon'                : {
            width     : 50,
            height    : 50,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        },
        '& .react-badge, & .logo-text': {
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color          : '#61DAFB'
    }
}));

function Logo()
{
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, "flex items-center")}>
            <img className="logo-icon" src={thllogo} alt="logo"/>
            <Typography className="text-16 ml-12 font-light logo-text" color="textPrimary">THL SOFT</Typography>
        </div>
    );
}

export default Logo;
