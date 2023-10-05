import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Driver} from '../../models/driver';

const initialState = {
  racers: [] as Driver[],
};

const racersSlice = createSlice({
  name: 'racersSlice',
  initialState,
  reducers: {
    setRacers: (state, action: PayloadAction<Driver[]>) => {
      state.racers = action.payload;
    },
  },
});

export const {setRacers} = racersSlice.actions;

export default racersSlice.reducer;
