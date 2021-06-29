import React from 'react';
import Content from "./components/content/Content";
import TabsNavigation from "./components/navigation/TabsNavigation";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {setAuthorized, setAuthorizedUser} from "./redux/login/LoginSlice";
import Navbar from "./components/navigation/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./components/profile/profile";
import userService from "./services/userService";
import HttpService from "./services/httpService";
import UserService from "./services/userService";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        minHeight: 300
    },
}));

function App() {


    const dispatch = useDispatch()
    const token = window.sessionStorage.getItem("AccessToken")
    if (token !== '') {
        new userService().validateToken({"token": token}).then((result) => {
                dispatch(setAuthorizedUser(result.user))
                dispatch(setAuthorized(true))
            }
        )
    }
        const classes = useStyles()
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/profil">
                        <Profile/>
                    </Route>
                    <Route exact path="/">
                        <Paper className={classes.root}>
                            <TabsNavigation/>
                            <Content/>
                        </Paper>
                    </Route>
                </Switch>
            </Router>
        )
}

export default App;
