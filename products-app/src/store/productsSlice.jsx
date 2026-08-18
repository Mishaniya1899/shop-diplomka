import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('products/getProducts', async (limit) => {
  const res = await axios.get('https://dummyjson.com/products?limit=' + limit)
  return res.data.products
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: '',
    sortBy: 'default',
    category: 'all'
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    clearError(state) {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setSearchQuery, setSortBy, setCategory, clearError } = productsSlice.actions
export default productsSlice.reducer
