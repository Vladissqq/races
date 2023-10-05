import {combineReducers, configureStore} from '@reduxjs/toolkit';
import racesReducer from './reducers/racesSlice';
import racersReducer from './reducers/racersSlice';
import {racerApi} from '../services/racerService';
import {racersApi} from '../services/racersService';
import {racesApi} from '../services/racesService';

const rootReducer = combineReducers({
  racesReducer,
  racersReducer,
  [racerApi.reducerPath]: racerApi.reducer,
  [racersApi.reducerPath]: racersApi.reducer,
  [racesApi.reducerPath]: racesApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false})
        .concat(racerApi.middleware)
        .concat(racersApi.middleware)
        .concat(racesApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
