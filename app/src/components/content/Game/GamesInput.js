import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import GamesPlayerSelector from "./GamesPlayerSelector";
import {GamesTable} from "./GamesTable";

export function GamesInput() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <GamesPlayerSelector/>
            </Grid>
            <Grid item style={{width:"100%"}}>
                <GamesTable/>
            </Grid>
        </Grid>
    );

}

export default GamesInput;