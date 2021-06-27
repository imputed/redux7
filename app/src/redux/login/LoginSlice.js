import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    authorized: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setAuthorized: (state, action) => {
            state.authorized = action.payload
        },


    },
});

export const {setAuthorized} = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuthorized = (state) => state.login.authorized;
export default loginSlice.reducer;
