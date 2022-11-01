import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const getAuth = createAsyncThunk("apiRedux/getAuth", async () => {
//   const URL = "https://www.linkedin.com/oauth/v2/authorization";
// });

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, userInfo: null },
  reducers: {},
  extraReducers: {},
});
