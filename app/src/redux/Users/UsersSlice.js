import {createSlice} from '@reduxjs/toolkit';

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
        setSelectPlayer: (state, action) => {
            let i = -1

            const playerId = parseInt(action.payload.id)
            const playerLabel = action.payload.label
            const player = action.payload.value

            if (playerId !== NaN && playerId < 4 && playerId > -1) {

                state.players.forEach((item, index) => {
                    if (item.player===player){
                        console.log(index)
                        state.players.splice(index,index+1)
                    }


                });
                state.players.forEach((item, index) => {
                    if (item.id===playerId){
                        state.players.splice(index,index+1)
                    }


                });
                state.players.push({id: playerId, label: playerLabel, player: player})

            }
        }
    },
});


export const {setUsers, setSelectUsers, setSelectPlayer} = usersSlice.actions;
export const selectUsers = (state) => state.users.user;
export const selectSelectUsers = (state) => state.users.selectUser;
export const selectPlayers = (state) => state.users.players;


export default usersSlice.reducer;
