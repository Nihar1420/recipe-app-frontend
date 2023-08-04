import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../services/auth.service";

const initialState = {
    registerDetails: [],
    loginDetails: [],
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const register = createAsyncThunk(
    'auth/register',
    async ({ username, password, mobileNumber, email }, thunkAPI) => {
        try {
            const data = await authService.registerService(username, password, mobileNumber, email);
            return data;
        } catch (error) {
            throw new Error("Something went wrong!!");
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await authService.loginService(username, password);
            return data;
        } catch (error) {
            throw new Error("Something went wrong!!");
        }
    }
);

const authSlice = createSlice({
    name: "auth-slice",
    initialState: initialState,
    reducers: {
        clearState: (state) => {
            state.registerDetails = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.registerDetails = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.rejected, (state) => {
                state.isSuccess = false;
                state.isError = true;
            });
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.loginDetails = action.payload;
                localStorage.setItem('userId',action.payload.userId);
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.rejected, (state) => {
                state.isSuccess = false;
                state.isError = true;
            });
    },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;