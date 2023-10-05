import {Routes} from './Routes';

export type NativeStackNavigatorTypes = {
  [key: string]: any;
  [Routes.RACER]: {driverId: string};
  [Routes.RACERS]: undefined;
  [Routes.RACES]: {driverId: string};
};
