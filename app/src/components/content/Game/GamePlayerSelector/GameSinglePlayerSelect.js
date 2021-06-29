import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectPlayers, selectPlayersId, selectUsers} from "../../../../redux/Users/UsersSlice";
import GamesPlayer from "../GamesPlayer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import {setPlayers} from "../../../../redux/game/GameSlice";

const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: "200px"
    },
}));

export function GamesPlayerSelect(props) {

    const classes = useStyles()
    return (

                <Grid item>
                    <Grid container justify={"center"} direction={"column"} spacing={2}>
                        <Grid item>
                            <h3 style={{textAlign: "center"}}>{props.title}</h3>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            <Select
                                value={props.value}
                                onChange={props.onChange}
                                displayEmpty
                                className={classes.select}
                                style={{textAlign: "center"}}
                            >
                                {props.selectableItems}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
    );

}


export default GamesPlayerSelect;