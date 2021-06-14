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

    const players = useSelector(selectRoundPlayers)
    const users = useSelector(selectUsers).filter((u) => {
        for (var i = 0; i < 4; i++) {
            if (u._id === players[i]) {
                return true
            }
        }
        return false
    })

    if(users.length !== 4)
    {
        return ''
    } else
    {

        return (
            <Box>
                <GameInsertForm players={users}/>


                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>


                                <StyledTableCell align={"center"}>#</StyledTableCell>
                                {users.map((u, index) => (

                                    <StyledTableCell component="th" scope="row" align={"center"}>
                                        Player {index+1}: {users[index].name}
                                    </StyledTableCell>

                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((u) => (
                                <StyledTableRow key={u.name}>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        {u.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <Checkbox/> {u.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <Checkbox/> {u.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <Checkbox/> {u.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <Checkbox/> {u.name}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box> );
    }
}


export default PlayerTable;