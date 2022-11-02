const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Cors config
const corsOptions = {
  origin: "*",
};

const app = express();
app.use(cors(corsOptions));

app.post("/token", async (req, res) => {
    const {code} = req.body
    const URL = "https://www.linkedin.com/oauth/v2/accessToken";

    console.log("code:", code);
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
          code: code,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_SECRET_KEY,
          redirect_uri: "https://linkedin-login-demo.netlify.app/profile",
        }),
      });
      console.log("RESPONSE:", response);
      const data = await response.json();
      console.log("TOKEN DATA:", data);
    } catch (error) {
      console.error(error);
      console.error(error.message);
    }
}

app.listen(process.env.port || 1111);
