import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAllComplaints, resolveOrReject} from "../../pages/Complaints/api/api";
import {readSession, readStorage} from "../../helpers/SessionHelper";

let loggedUser = readSession('loggedInUser');
// let loggedUser = state.auth.loggedUser;
console.log(loggedUser)
// if(!loggedUser.email || !loggedUser.accessToken || !loggedUser.refreshToken){
//     loggedUser = readStorage('rememberedUser');
// }

export const fetchAll = createAsyncThunk(
    'complaint/fetchAll',
    async () => {
        if (loggedUser == null) {
            return;
        }
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
export const resolveRejectComplaint = createAsyncThunk(
    'complaint/resolveOrReject',
    async (remark) => {
        try {
            const response = await resolveOrReject(
                loggedUser.accessToken,
                loggedUser.refreshToken,
                remark
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
        },
        [resolveRejectComplaint.fulfilled]: (state, action) => {
            alert('Resolve/Reject Succesful')
        }
    }
})

export const {test} = complaintsSlice.actions;
export default complaintsSlice.reducer;
