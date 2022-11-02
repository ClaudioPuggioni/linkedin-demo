import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getData = createAsyncThunk("apiRedux/getData", async () => {
  const URL = "https://www.linkedin.com/oauth/v2/accessToken";

  console.log("code asyncThunk", localStorage.getItem("code"));
  console.log(process.env.REACT_APP_CLIENT_ID);
  console.log(process.env.REACT_APP_SECRET_KEY);
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: localStorage.getItem("code"),
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_SECRET_KEY,
        redirect_uri: "https://linkedin-login-demo.netlify.app/profile",
      }).toString(),
    });
    console.log("RESPONSE:", response);
    const data = await response.json();
    console.log("TOKEN DATA:", data);
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
});

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, userInfo: null },
  reducers: {},
  extraReducers: {},
});

export { getData };

export default apiSlice.reducer;
