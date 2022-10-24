import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getWeights, getUserCounts} from "../../pages/Dashboard/api/api";
import {useDispatch} from "react-redux";


export const fetchWeights = createAsyncThunk(
    'stat/weights',
    async () => {
        try {
            const response = await getWeights();
            return response.data;
        } catch (e) {
            // return rejectWithValue(e.response.data);
        }
    }
)
export const fetchUserCounts = createAsyncThunk(
    'stat/userCounts',
    async () => {
        try {
            const response = await getUserCounts();
            console.log(response);
            return response.data;
        } catch (e) {
            // return rejectWithValue(e.response.data);
        }
    }
)


let initialState = {
    weights: null,
    userCounts: null
};
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWeights.fulfilled]: (state, action) => {
            const weightsArray = action.payload.weights;
            const weights = {};
            let totalWeight = 0;
            weightsArray.forEach((weight) => {
                weights[weight.bintype] = weight.garbageweight;
                totalWeight += weight.garbageweight;
            })
            weights.total = totalWeight;
            state.weights = weights;
        },
        [fetchUserCounts.fulfilled]: (state, action) => {
            state.userCounts = action.payload;
        },

    }
})

export const {logout, resetErrors} = statSlice.actions;
export default statSlice.reducer;

