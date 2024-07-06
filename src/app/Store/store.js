const { configureStore } = require("@reduxjs/toolkit");
import appointmentReducer from './AppointmentSlice.js';
import UserReducer from './UserSlice.js';
const store = configureStore({
    reducer:{
        appointment : appointmentReducer,
        user:UserReducer,
    }
})

export default store;