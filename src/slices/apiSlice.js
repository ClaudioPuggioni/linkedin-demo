import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getData = createAsyncThunk("apiRedux/getData", async () => {
  const URL = "https://www.linkedin.com/oauth/v2/accessToken";

  console.log("code asyncThunk", localStorage.getItem("code"));

  const response = await fetch(URL, {
    method: "POST ",
    headers: {
      "Content-Type": "x-www-form-urlencoded",
      grant_type: "authorization_code",
      code: localStorage.getItem("code"),
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_SECRET_KEY,
      redirect_uri: "https://linkedin-login-demo.netlify.app/profile",
    },
  });
  console.log("RESPONSE:", response);
  const data = await response.json();
  console.log("TOKEN DATA:", data);
});

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, userInfo: null },
  reducers: {},
  extraReducers: {},
});

export { getData };

export default apiSlice.reducer;
