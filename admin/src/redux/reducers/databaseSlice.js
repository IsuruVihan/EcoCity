import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getUserCounts} from "../../pages/Dashboard/api/api";
import {getHubs} from "../../pages/Database/GarbageHubs/api/api";


export const fetchHubs = createAsyncThunk(
    'hubs/all',
    async () => {
        try {
            const response = await getHubs();
            return response.data;
        } catch (e) {
            // return rejectWithValue(e.response.data);
        }
    }
)
// export const fetchUserCounts = createAsyncThunk(
//     'stat/userCounts',
//     async () => {
//         try {
//             const response = await getUserCounts();
//             console.log(response);
//             return response.data;
//         } catch (e) {
//             // return rejectWithValue(e.response.data);
//         }
//     }
// )


let initialState = {
    hubs: null,
};
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchHubs.fulfilled]: (state, action) => {
            state.hubs = action.payload;
        },
        // [fetchUserCounts.fulfilled]: (state, action) => {
        //     state.userCounts = action.payload;
        // },

    }
})

export const {logout, resetErrors} = statSlice.actions;
export default statSlice.reducer;

