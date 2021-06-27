import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    authorized: false,
};

export const loginSlice = createSlice({
    name: 'login',
    user:{},
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setAuthorized: (state, action) => {
            state.authorized = action.payload
            if (action.payload===false){
                state.user={}
            }

        },
        setAuthorizedUser: (state, action) => {
            state.user = action.payload
        },

    },
});

export const {setAuthorized,setAuthorizedUser} = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuthorized = (state) => state.login.authorized;
export const selectAuthorizedUser = (state) => state.login.user;
export default loginSlice.reducer;
