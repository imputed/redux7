import { configureStore } from '@reduxjs/toolkit';
import personSlice from './person/PersonSlice';
import tabValueSlice from './tabvalue/tabvalueSlice';
import usersSlice from "./Users/UsersSlice";
import gameSlice from "./game/GameSlice";

export const store = configureStore({
  reducer: {
    person: personSlice,
    tabValue: tabValueSlice,
    users: usersSlice,
    game: gameSlice
  },
});
