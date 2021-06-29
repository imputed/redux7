import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Box, Table} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getPlayer} from "../../../../redux/game/GameSlice";
import {selectUsers, setUsers} from "../../../../redux/Users/UsersSlice";
import GameInsertForm from "../GameInsertForm/GameInsertForm";
import TableCell from "@material-ui/core/TableCell";
import httpService from "../../../../services/httpService";
import APIService from "../../../../services/APIService";

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
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

export function GameTable(props) {
    const classes = useStyles();
    const [rounds, setRounds] = React.useState([])
    const selectedPlayers = []
    const users = useSelector(selectUsers)
    const [player,setPlayer] = React.useState([])
    useEffect(() => {
        APIService().UserService.getPlayer(props.selectedPlayer).then((result)=> {setPlayer(result) })
        // APIService.HTTPService.getAllGames({players: props.selectedPlayer}).then((games) => {
        //         setRounds(games)
        //     })
        }
    )


    if (selectedPlayers.filter((p) => p !== '').length < 5) {
        return (<Box>
            <GameInsertForm players={users.filter((u) => {
                let returnValue = false
                for (var i = 0; i < selectedPlayers.length; i++) {
                    if (selectedPlayers[i] === u._id) {
                        returnValue = true
                    }

                }
                return returnValue
            })}/>
        </Box>)
    } else {

        return (
            <Box>
                <GameInsertForm players={users.filter((u) => {
                    let returnValue = false
                    for (var i = 0; i < selectedPlayers.length; i++) {
                        if (selectedPlayers[i] === u._id) {
                            returnValue = true
                        }
                    }
                    return returnValue
                })}/>


                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {
                                    rounds.map((r) => {
                                        return r.players.map((p) => {
                                            return (<StyledTableCell align="center" component="th">
                                                {p.name}
                                            </StyledTableCell>)

                                        })
                                    })

                                } }
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                rounds.map((r) => {
                                        let style = []
                                        return (r.games.map((g) => {
                                                    for (var i = 0; i < 4; i++) {
                                                        g.winner.map((w) => {
                                                            if (w.name === r.players[i].name) {
                                                                style[i] = {
                                                                    border: "solid 10px #f2f2f2",
                                                                    backgroundColor: "orange"
                                                                }
                                                            }
                                                        })
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


export default GameTable;