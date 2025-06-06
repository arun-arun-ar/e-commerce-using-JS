import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

//spesefying base url 
const baseQuery = fetchBaseQuery({baseUrl: BASE_URL})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Proudct', 'Order', 'User', 'Category'],
    endpoints: ()=>{}
})