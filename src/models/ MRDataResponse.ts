import {Driver} from './driver';
import {InitialRace} from './race';

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  DriverTable: {
    Drivers: Driver[];
  };
  RaceTable: {
    Races: InitialRace[];
  };
}
