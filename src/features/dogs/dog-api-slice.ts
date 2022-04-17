import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "fb205bee-8509-4d4a-9b46-15b755e659a";

interface Breed {
  id: number;
  name: string;
  image: {
    url: string;
  };
  children?: JSX.Element | JSX.Element[];
}

export const apiSlice = createApi({
  //  where we are keeping the data in reducers
  reducerPath: "api",
  // how we are going to fetch the data
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
