import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    players: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPlayers: (state, action) => {
            state.players = action.payload
        }
    },
});

export const {setPlayers} = gameSlice.actions;
export const selectRoundPlayers = (state) => state.game.players;
export default gameSlice.reducer;
