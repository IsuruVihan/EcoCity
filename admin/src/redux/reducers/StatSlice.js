import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getWeights} from "../../pages/Dashboard/api/api";
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


let initialState = {
    weights: null,
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
        [fetchWeights.rejected]: (state, action) => {

        },

    }
})

export const {logout, resetErrors} = statSlice.actions;
export default statSlice.reducer;

