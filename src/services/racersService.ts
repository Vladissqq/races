import {BASE_URL} from '../constants/api';
import {APIResponse} from '../models/APIResponse';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const racersApi = createApi({
  reducerPath: 'racersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    fetchRacers: builder.query({
      query: ({page = 0}) => {
        return {
          url: `/f1/drivers.json?limit=10&offset=${page}`,
          method: 'GET',
        };
      },
      transformResponse: (response: APIResponse) => {
        return response?.MRData?.DriverTable?.Drivers;
      },
    }),
  }),
});

export const {useLazyFetchRacersQuery} = racersApi;

export const {endpoints, reducerPath, reducer} = racersApi;
