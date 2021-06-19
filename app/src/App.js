import React from 'react';
import Content from "./components/content/Content";
import TabsNavigation from "./components/navigation/TabsNavigation";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        minHeight: 300
    },
}));

function App() {

    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <TabsNavigation/>
            <Content/>
        </Paper>
    )
}

export default App;
