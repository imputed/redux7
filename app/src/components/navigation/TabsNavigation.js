import {useDispatch, useSelector} from "react-redux";
import {changeTab, selectValue} from "../../redux/tabvalue/tabvalueSlice";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function TabsNavigation() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedTab = useSelector(selectValue)

    const handleChange = (event, newValue) => {
        dispatch(changeTab(newValue))
    };

    return (
        <Paper className={classes.root}>
            <AppBar position="static">

                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    centered
                >
                    <Tab label="User"/>
                    <Tab label="Games"/>
                </Tabs>

            </AppBar>
        </Paper>
    );
}