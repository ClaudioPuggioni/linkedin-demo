import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getData = createAsyncThunk("apiRedux/getData", async () => {
  //   const URL = "http://localhost:1111/token";
  const URL = "http://https://linkedin-demo-server.onrender.com/token";
  const code = localStorage.getItem("code");
  console.log("REDUX CODE:", code);

  try {
    const response = await axios({
      method: "POST",
      url: URL,
      data: { code },
    });
    console.log("RESPONSE.DATA:", response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.message);
  }
});

const apiSlice = createSlice({
  name: "apiRedux",
  initialState: { auth: null, userInfo: null },
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, action) => {},
    [getData.rejected]: (state, action) => {},
    [getData.fulfilled]: (state, action) => {
      const { firstName, lastName, imgURL } = action.payload;
      state.userInfo = { name: firstName, surname: lastName, src: imgURL };
    },
  },
});

export { getData };

export default apiSlice.reducer;
