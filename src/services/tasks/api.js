import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { todoistApiConfig } from '../../utils/todoist-api';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: todoistApiConfig.baseUrl,
    prepareHeaders: (headers) => {
      for (let [key, value] of Object.entries(todoistApiConfig.headers)) {
        headers.set(key, value);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProjectTasks: builder.query({
      query: () => ({
        url: '/tasks?project_id=2309751576',
      }),
    }),
  }),
});

export const { useGetProjectTasksQuery } = tasksApi;
