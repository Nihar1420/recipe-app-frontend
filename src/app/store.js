import { configureStore } from '@reduxjs/toolkit'
import authSLice from '../features/auth-slice';

const store = configureStore({
    reducer: {
        auth: authSLice
    },
});

export default store;