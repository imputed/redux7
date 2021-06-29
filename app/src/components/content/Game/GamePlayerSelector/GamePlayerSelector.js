import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectPlayers, selectPlayersId, selectUsers, setUsers} from "../../../../redux/Users/UsersSlice";
import GamesPlayer from "../GamesPlayer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import {getGamePlayer, getPlayer, setPlayers} from "../../../../redux/game/GameSlice";
import GamesPlayerSelect from "./GameSinglePlayerSelect";
import APIService from "../../../../services/APIService";
import httpService from "../../../../services/httpService";

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },

    button: {
        margin: 10
    },
    select: {
        minWidth: "200px"
    },
}));

export function GamePlayerSelector(props) {
    const [user, setUser] = React.useState([])
    const [selectUser, setSelectUser] = React.useState([])
    const initialPlayerValue = ''
    const [player1, setPlayer1] = React.useState(initialPlayerValue)
    const [player2, setPlayer2] = React.useState(initialPlayerValue)
    const [player3, setPlayer3] = React.useState(initialPlayerValue)
    const [player4, setPlayer4] = React.useState(initialPlayerValue)

    const classes = useStyles()

    useEffect(() => {
        APIService().UserService.getAllUsers().then((result) => {
            setUser(result.user)
            setSelectUser(result.user.map((u) => {
                    return (
                        <MenuItem key={"MenuItemKey" + u.id} value={u.id}>{u.name}</MenuItem>)
                })
            )
        })
    }, []);

    const checkPosition = (newValue) => {
        const tmpSelectedPlayers = [player1, player2, player3, player4].filter((e => e === newValue))
        return (tmpSelectedPlayers.length === 0)
    }

    const handlePlayerSelect = () => {
        props.setSelectedPlayer([player1, player2, player3, player4])
    }


    const handleChangePlayer1 = (event) => {
        if (checkPosition(event.target.value)) {
            setPlayer1(event.target.value)
            handlePlayerSelect()
        }
    }
    const handleChangePlayer2 = (event) => {
        if (checkPosition(event.target.value)) {
            setPlayer2(event.target.value)
        }
    }
    const handleChangePlayer3 = (event) => {
        if (checkPosition(event.target.value)) {
            setPlayer3(event.target.value)
            handlePlayerSelect()
        }
    }

    const handleChangePlayer4 = (event) => {
        if (checkPosition(event.target.value)) {
            setPlayer4(event.target.value)
            handlePlayerSelect()
        }
    }
    return (

        <Box className={classes.box}>
            <Grid container spacing={8} justify={"space-around"}>
                <GamesPlayerSelect title={"Player 1"} value={player1} onChange={handleChangePlayer1}
                                   selectableItems={selectUser}/>
                <GamesPlayerSelect title={"Player 2"} value={player2} onChange={handleChangePlayer2}
                                   selectableItems={selectUser}/>
                <GamesPlayerSelect title={"Player 3"} value={player3} onChange={handleChangePlayer3}
                                   selectableItems={selectUser}/>
                <GamesPlayerSelect title={"Player 4"} value={player4} onChange={handleChangePlayer4}
                                   selectableItems={selectUser}/>
            </Grid>
        </Box>
    );
}

export default GamePlayerSelector;