import React, {Component} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Card, Checkbox, Grid, Table, TableCell, Typography} from "@material-ui/core";
import httpService from "../../../services/httpService";
const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
        width:"30%"
    },
}));
const svc = new httpService()
export function GameInsertForm(props) {
      const classes = useStyles()
    const createGame= (event) =>{
    svc.createGame({player: props.players, winner:props.players[3]})
    }
    return (
        <Box className={classes.box}>
            <Card>
            <Grid container direction={"row"}>
                <Grid item>
                    <Grid container alignItems={"center"} direction={"row"} style={{textAlign: "center"}}>
                        <Grid item style={{margin: 50}}>
                            <Typography>
                                Winner
                            </Typography>
                        </Grid>
                        {props.players.map((p) => {
                            return (


                                <Grid item>
                                    <Typography>
                                        {p.name}
                                    </Typography>
                                    <Checkbox/>
                                </Grid>
                            )
                        })}
                        <Grid item style={{margin: 50}}>
                            <Button onClick={(event)=> createGame(event)}>+</Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

            </Card>
        </Box>

    );


}

export default GameInsertForm;