import React from 'react';
import Content from "./components/content/Content";
import TabsNavigation from "./components/navigation/TabsNavigation";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthorized, setAuthorized} from "./redux/login/LoginSlice";
import Button from "@material-ui/core/Button";
import {changeTab} from "./redux/tabvalue/tabvalueSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        minHeight: 300
    },
}));

function App() {

    const authorized = useSelector(selectAuthorized)
    const dispatch = useDispatch()

    const classes = useStyles()
    if (authorized === true) {
        return (
            <>
                <Button onClick={() => {
                    dispatch(setAuthorized(false))
                    dispatch(changeTab(0))
                }}
                >Log Off</Button>
                <Paper className={classes.root}>
                    <TabsNavigation/>
                    <Content/>
                </Paper>
            </>
        )
    } else {
        return (
            <Paper className={classes.root}>
                <TabsNavigation/>
                <Content/>
            </Paper>
        )
    }

}

export default App;
