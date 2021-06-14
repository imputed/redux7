import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    value: 0,
    status: 'idle',
    name: '',
    age: 0,
    role: '',
    isNew: false,
};

export const personSlice = createSlice({
    name: 'person',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
        toggleIsNew: (state) => {
            state.isNew = !state.isNew
        },


    },
});

export const {setName, setAge, setRole, toggleIsNew} = personSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.person.value;
export const selectName = (state) => state.person.name;
export const selectAge = (state) => state.person.age;
export const selectRole = (state) => state.person.role;
export const selectIsNew = (state) => state.person.isNew;
export default personSlice.reducer;
