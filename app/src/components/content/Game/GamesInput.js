import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import PlayerSelector from "./PlayerSelector";
import {PlayerTable} from "./PlayerTable";

export function GamesInput() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <PlayerSelector/>
            </Grid>
            <Grid item style={{width:"100%"}}>
                <PlayerTable/>
            </Grid>
        </Grid>
    );

}

export default GamesInput;