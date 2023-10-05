import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  races: [],
};

const racesSlice = createSlice({
  name: 'racesSlice',
  initialState,
  reducers: {
    setRaces: (state, action: PayloadAction<[]>) => {
      state.races = action.payload;
    },
  },
});

export const {setRaces} = racesSlice.actions;

export default racesSlice.reducer;
