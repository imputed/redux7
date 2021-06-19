import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import httpService from "../../../services/httpService";
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        margin: 10,
    },
    selectItem: {
        minWidth: 100,
    },
    cardRow: {
        margin: 40
    }
}));
const svc = new httpService()

export function GameInsertForm(props) {
    const classes = useStyles()
    const [winner, setDefaultWinner] = React.useState({name: ""})
    const [tarif, setTarif] = React.useState(1050)
    const [game, setGame] = React.useState({name:"Sauspiel",value:1})

    const changeWinner = (event) => {
        setDefaultWinner(event.target.value)
    }

    const createGame = (event) => {
        const winners = displayPlayer.filter((u) => {
            return u.value === winner
        })

        svc.createGame({player: displayPlayer, games: [{winner: winners, tarif: tarif,game:game}]})
    }

    const changeTarif = (event) => {
        setTarif(event.target.value)
    }
    const changeGame = (event) => {
        setGame(event.target.value)
    }
    const displayPlayer = []

    props.players.map((p) => {
       displayPlayer.push({name: p.name, value: p._id})
    })

    function getGridRow(name, options, setFunction, value) {
        return <Grid container justify={"center"} alignItems={"center"} direction={"row"} className={classes.cardRow}>
            <Grid item xs={4}>
                <Typography>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Select
                    className={classes.selectItem}
                    value={value}
                    onChange={(event) => setFunction(event)}>
                    {options.map((o) => {
                        return <MenuItem value={o.value}>{o.name}</MenuItem>
                    })}
                </Select>
            </Grid>
        </Grid>;
    }


    return (
        <Box className={classes.box}>
            <Card>
                <Grid container direction={"column"} justify={"center"}>
                    <Grid item>
                        {getGridRow("Winner", displayPlayer, changeWinner, winner)}
                        {getGridRow("Tarif", [{name: "10 50", value: 10_50}, {
                            name: "10 - 30",
                            value: 10_30
                        }], changeTarif, tarif)}
                        {getGridRow("Game", [{name: "Sauspiel", value: 1}, {name: "Solo", value: 2}], changeGame, game)}
                        <Grid item style={{margin: 50}}>
                            <Grid container justify={"center"}>
                                <Button onClick={(event) => createGame(event)}>+</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Card>
        </Box>

    );


}

export default GameInsertForm;