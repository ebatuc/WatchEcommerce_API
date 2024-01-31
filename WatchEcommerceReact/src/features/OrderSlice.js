import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitOrder = createAsyncThunk('order/submitOrder', async (order, thunkAPI) => {
  try {
    const response = await axios.post('https://localhost:7025/api/Order', order, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    id: null,
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setOrder: (state, action) => {
      return action.payload;
    },
    clearOrder: (state) => {
      return {
        id: null,
        products: [],
        status: 'idle',
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.id;
        state.products = action.payload.products; 
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export const selectOrder = (state) => state.order;
export default orderSlice.reducer;
