import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: "200px"
    },
}));

export function Player(props) {
    const classes = useStyles()
    const handleChange = (event) => {
        props.onChange(props.id, event.target.value);
    };

    return (

        <Grid item>
            <Grid container justify={"center"} direction={"column"} spacing={2}>
                <Grid item>
                    <h1 style={{textAlign: "center"}}>Player {props.id}</h1>
                </Grid>
                <Grid item style={{width: "100%"}}>
                    <Select
                        id={toString(props.id)}
                        value={props.selectedPlayer}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.select}
                        label={"diabled"}
                        style={{textAlign: "center"}}
                    >
                        {props.options.map((u) => {
                            console.log(props.selectedPlayer)
                            return (
                                <MenuItem key={"MenuItemKey" + u._id} value={u._id} name={"dsf"}>{u.name}</MenuItem>)
                        })}
                    </Select>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Player