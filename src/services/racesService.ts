import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants/api';
import {APIResponse} from '../models/APIResponse';
import {Race} from '../models/race';

export const racesApi = createApi({
  reducerPath: 'racesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    fetchRacesById: builder.query({
      query: ({id}) => {
        return {
          url: `/f1/drivers/${id}/results.json`,
          method: 'GET',
        };
      },
      transformResponse: (response: APIResponse): Race[] => {
        return response.MRData.RaceTable.Races.map(race => {
          const {raceName, season, time, url, circuitId} = race;
          const {position, points} = race.Results[0];

          return {
            season,
            time,
            circuitId,
            url,
            position,
            points,
            raceName,
          };
        });
      },
    }),
  }),
});

export const {useLazyFetchRacesByIdQuery} = racesApi;

export const {endpoints, reducerPath, reducer} = racesApi;
