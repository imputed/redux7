import React from 'react';
import Content from "./components/content/Content";
import TabsNavigation from "./components/navigation/TabsNavigation";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        minHeight: 300
    },

    element: {
        margin: 5,
        justifyContent: "space-around",
        alignItems: "center"
    }
}));

function App() {

    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <TabsNavigation/>
            <Grid container className={classes.element} justify={"center"}>
                <Grid item className={classes.element}>
                        <Content/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default App;
