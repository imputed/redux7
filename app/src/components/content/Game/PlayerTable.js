import React, {useEffect} from 'react';

import {useSelector} from "react-redux";
import {Box, Button, Checkbox, Grid, Table} from "@material-ui/core";

import {withStyles, makeStyles} from '@material-ui/core/styles';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {selectRoundPlayers} from "../../../redux/game/GameSlice";
import {selectUsers} from "../../../redux/Users/UsersSlice";
import GameInsertForm from "./GameInsertForm";
import httpService from "../../../services/httpService";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export function PlayerTable() {
    const classes = useStyles();
    const svc = new httpService()
    const [rounds, setRounds] = React.useState([])
    svc.getAllGames().then((games) => {
        setRounds(games)
    })


    if (rounds.length === 0) {
        return ''
    } else {

        return (
            <Box>
                <GameInsertForm players={rounds[0].players}/>


                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>

                                {


                                            rounds[0].players.map((p) => {
                                                return (<StyledTableCell align="center">{p.name}</StyledTableCell>)
                                            })


                                }

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                rounds.map((r) => {
                                        let style = []
                                        return (r.games.map((g) => {
                                                    for (var i = 0; i < 4; i++) {
                                                        if (g.winner === r.players[i].name) {
                                                            style[i] = {border: "solid 10px #f2f2f2", backgroundColor: "orange"}
                                                        }
                                                    }
                                                    return (<StyledTableRow>

                                                            <StyledTableCell align="center" component="th" style={style[0]}>
                                                                {r.players[0].name}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center" component="th" style={style[1]}>

                                                                {r.players[1].name}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center" component="th" style={style[2]}>

                                                                {r.players[2].name}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center" component="th" style={style[3]}>
                                                                {r.players[3].name}
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    )
                                                }
                                            )
                                        )
                                    }
                                )

                            }

                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>
        );
    }
}


export default PlayerTable;