import {createSlice} from '@reduxjs/toolkit';
import {setPlayers} from "../game/GameSlice";

const initialState = {
    user: [],
    selectUser: [],
    players: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.user = action.payload
        },
        setSelectUsers: (state, action) => {
            state.selectUser = action.payload
        },
        setPlayers: (state, action) => {
            state.players = action.payload
        },

    },
});


export const {setUsers, setSelectUsers, setSelectPlayer} = usersSlice.actions;
export const selectUsers = (state) => state.users.user;
export const selectPlayers = (state) => state.users.players;


export default usersSlice.reducer;
