// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-l6.onrender.com/' }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})

//to get one profuct by id
export const oneProductApi = createApi({
  reducerPath: 'oneProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-l6.onrender.com/' }),
  endpoints: (builder) => ({
    getOneProductName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductByNameQuery } = productApi
export const { useGetOneProductNameQuery } = oneProductApi