import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
};

export const tabValueSlice = createSlice({
    name: 'tabValue',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
       changeTab: (state,action) => {
            state.value = action.payload
        }
    },
});

export const {changeTab} = tabValueSlice.actions;
export const selectValue = (state) => state.tabValue.value;
export default tabValueSlice.reducer;
