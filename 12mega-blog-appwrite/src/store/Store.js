//configureStore import nebe ar sob reducer somporke info debe

import {configureStore} from '@reduxjs/toolkit'
import authSlice from './AuthSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
    }
});

export default store;