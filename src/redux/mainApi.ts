import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { GetUsersParams } from '../types/mainApi';
import { GetUsersResponse } from '../types/backend';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, GetUsersParams>({
      query: (arg) => {
        const PAGE_LIMIT = 10;
        return `users?limit=${PAGE_LIMIT}&skip=${arg.page * PAGE_LIMIT}`;
      },
    }),
  }),
});

export const { useGetUsersQuery } = mainApi;
