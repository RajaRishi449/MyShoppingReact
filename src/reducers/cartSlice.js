import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        itemsAdded: (state, action) => {
            const check = state.items.find(item => item.id === action.payload.id);
            if (check) {
                check.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        itemDeleted: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        itemIncremented: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        itemDecremented: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
            }
        },
        totalAmountDecrement: (state, action) => {
            state.totalAmount = Math.max(0, state.totalAmount - action.payload);  // Ensure total amount does not go below zero
        },
        totalAmountIncrement: (state, action) => {
            state.totalAmount += action.payload;
        }
    }
});

export default cartSlice.reducer;
export const { itemsAdded, itemDeleted, itemIncremented, itemDecremented, totalAmountIncrement, totalAmountDecrement } = cartSlice.actions;
