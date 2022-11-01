import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getData = createAsyncThunk("apiRedux/getData", async () => {
  const URL = "https://www.linkedin.com/oauth/v2/accessToken";

  const response = await fetch(URL, {
    method: "POST ",
    headers: {
      grant_type: "",
      code: localStorage.getItem("code"),
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_SECRET_KEY,
      redirect_uri: "https://linkedin-login-demo.netlify.app/profile",
    },
  });
  const data = await response.json();
  console.log("TOKEN DATA:", data);
});

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, userInfo: null },
  reducers: {},
  extraReducers: {},
});
