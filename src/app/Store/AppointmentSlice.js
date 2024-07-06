const { createSlice } = require("@reduxjs/toolkit");

const AppointmentSlice = createSlice({
    name:"appointment",
    initialState:{allDepartment:[],allDoctor:[]},
    reducers:{
        setAllDepartment :(state,action)=>{
            state.allDepartment = action.payload;
        },
        setAllDoctor:(state,action)=>{
            state.allDoctor = action.payload;
        }
    }
})

export const {setAllDepartment,setAllDoctor} = AppointmentSlice.actions;
export default AppointmentSlice.reducer;