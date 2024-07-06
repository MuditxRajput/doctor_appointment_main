const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
    name:"user",
    initialState:{userDetail:{}},
    reducers:{
        setUserDetail:(state,action)=>{
            state.userDetail = action.payload;
        }
    }
})
export const {setUserDetail} =UserSlice.actions;
export default UserSlice.reducer;
