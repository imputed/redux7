import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import GamePlayerSelector from "./GamePlayerSelector/GamePlayerSelector";
import {GameTable} from "./GameTable/GameTable";

export function GameController() {
const [selectedPlayer, setSelectedPlayer] = React.useState([])
    return (
        <Grid container>
            <Grid item xs={12}>
                <GamePlayerSelector setSelectedPlayer={setSelectedPlayer}/>
            </Grid>
            <Grid item style={{width:"100%"}}>
                <GameTable selectedPlayer={{selectedPlayer}}/>
            </Grid>
        </Grid>
    );

}

export default GameController;