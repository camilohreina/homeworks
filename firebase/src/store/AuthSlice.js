import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null,
    },
    reducers: {
        register: (state, action) => {
            state.user = action.payload.email;
        },
        logout: (state, action) => {
            
        },
        checkingCredentials: (state, action) => {
            console.log('Checking credentials');
        }
    },
});

export const { register, logout, checkingCredentials } = authSlice.actions;