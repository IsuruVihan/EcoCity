import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAllComplaints} from "../../pages/Complaints/api/api";
import {readSession} from "../../helpers/SessionHelper";

const loggedUser = readSession('loggedInUser');
console.log(loggedUser.accessToken)

export const fetchAll = createAsyncThunk(
    'complaint/fetchAll',
    async () => {
        try {
            const response = await getAllComplaints(
                loggedUser.accessToken,
                loggedUser.refreshToken
            );
            return response.data;
        } catch (e) {
            // return rejectWithValue(e.response.data);
        }
    }
)

let initialState = {
    complaints: null,
    isLoading: false,
};
export const complaintsSlice = createSlice({
    name: 'complaints',
    initialState,
    reducers: {
        test: () => {
            console.log('test');
        }

    },
    extraReducers: {
        [fetchAll.fulfilled]: (state, action) => {
            const data = action.payload;
            state.complaints = data.complaints;
            state.isLoading = false;
        },
        [fetchAll.rejected]: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload.message;
            state.isLoading = false;
        },
        [fetchAll.pending]: (state) => {
            state.isLoading = true;
        }
    }
})

export const {test} = complaintsSlice.actions;
export default complaintsSlice.reducer;
