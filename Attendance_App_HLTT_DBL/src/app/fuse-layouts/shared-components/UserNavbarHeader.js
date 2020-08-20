import React from 'react';
import {AppBar, Avatar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root  : {
        
    },
    avatar: {
        
    }
}));

function UserNavbarHeader(props)
{
    const user = useSelector(({auth}) => auth.user);

    const classes = useStyles();

    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            classes={{root: classes.root}}
            className="user relative flex flex-col items-center justify-center pt-100 pb-100 mb-50 z-0"
        >
            {/* <Typography className="username text-16 whitespace-no-wrap" color="inherit">{user.data.displayName}</Typography>
            <Typography className="email text-13 mt-8 opacity-50 whitespace-no-wrap" color="inherit">{user.data.email}</Typography>
            <Avatar
                className={clsx(classes.avatar, "avatar")}
                alt="user photo"
                src={user.data.photoURL && user.data.photoURL !== '' ? user.data.photoURL : "assets/images/avatars/profile.jpg"}
            /> */}
        </AppBar>
    );
}

export default UserNavbarHeader;
