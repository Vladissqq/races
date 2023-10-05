import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {APIResponse} from '../models/APIResponse';
import {BASE_URL} from '../constants/api';

export const racerApi = createApi({
  reducerPath: 'racerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    getRacerById: builder.query({
      query: ({id}) => {
        return {
          url: `/f1/drivers/${id}.json`,
          method: 'GET',
        };
      },
      transformResponse: (response: APIResponse) => {
        return response?.MRData?.DriverTable?.Drivers[0] || {};
      },
    }),
  }),
});

export const {useLazyGetRacerByIdQuery} = racerApi;

export const {endpoints, reducerPath, reducer} = racerApi;
