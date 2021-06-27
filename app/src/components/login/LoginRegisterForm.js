import React from "react";
import {useForm, Controller} from "react-hook-form";
import {AppBar, Button, FormLabel, Input, Toolbar, Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {
    toggleIsNew
} from '../../redux/person/PersonSlice';
import {makeStyles} from "@material-ui/core/styles";
import userService from "../../services/userService";
import LoginRegister from './index'
import {selectAuthorized, setAuthorized} from "../../redux/login/LoginSlice";
import {changeTab} from "../../redux/tabvalue/tabvalueSlice";


const useStyles = makeStyles(() => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function LoginRegisterForm() {
    const {control, handleSubmit} = useForm();
    const svc = new userService()
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const user = {name: data["name"], mail: data['mail'], password: data['password'], role: data['role'].label}
        Promise.resolve(svc.registerUser(user)).then(() => {
                dispatch(toggleIsNew())
            }
        )

    };
    const [disableLocal, setDisableLocal] = React.useState(0)
    const [disableRegister, setDisableRegister] = React.useState(0)
    const [disableRegisterProviders, SetDisableRegisterProviders] = React.useState(0)
    const classes = useStyles()
    const header = (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">Welcome</Typography>
            </Toolbar>
        </AppBar>
    );

    const footer = (
        <div className={classes.footer}>
            <Typography variant="caption" align="center">Footer Goes Here</Typography>
        </div>
    );

    const s = useSelector(selectAuthorized)
    const handleLogin = content => {
        const user = {"name": content.username, "password": content.password}
        new userService().loginUser(user).then((response) => {
            if (response.token !== '') {
                window.sessionStorage.setItem("AccessToken", response.token)
                dispatch(setAuthorized(true))
                dispatch(changeTab(1))
            }

        })
    };

    const handleRegister = content => {
        const user = {"name": content.username, "password": content.password, role: content.role, mail: content.mail}
        new userService().registerUser(user).then(() => {
            new userService().loginUser(content.username, content.password)
        })


    };

    return (

        <Box className={classes.box}>
            <LoginRegister header={header} footer={footer}
                           onLogin={handleLogin}
                           onRegister={handleRegister}
            />
        </Box>
    );
}
;
