import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWishList = createAsyncThunk('wish/fetchWishList', async () => {
    const response = await axios.get('https://localhost:7025/api/Wish');
    return response.data;
});

export const removeWishAsync = (wishId) => async (dispatch) => {
    try {
        await axios.delete(`https://localhost:7025/api/Wish/?wishId=${wishId}`);
        dispatch(removeFromWish({ wishId }));
    } catch (error) {
        console.error('Error removing from wish:', error);
        alert('Error removing from wish list');
    }
};


const wishSlice = createSlice({
    name: 'wish',
    initialState: {
        wish: [],
        status: 'idle',
        error: null,
    },
    reducers: {

       
        checkWish: async (state, action) => {
            const { productId } = action.payload;

            try {
                await axios.put(`https://localhost:7025/api/Wish/${productId}`);
                // state.wish = state.wish.map((item) => {
                //     if (item.product.id === productId) {
                //         return { ...item, checked: !item.checked };
                //     }
                //     return item;
                // });
            } catch (error) {
                console.error('Error checking wish:', error);
                alert('Error checking wish list');
            }
        },
        clearWish: (state) => {
            state.wish = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWishList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.wish = action.payload;
            })
            .addCase(fetchWishList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export const selectWish = (state) => state.wish.wish;
export const selectWishStatus = (state) => state.wish.status;
export const selectWishError = (state) => state.wish.error;
export const {removeFromWish, checkWish, clearWish } = wishSlice.actions;

export default wishSlice.reducer;
