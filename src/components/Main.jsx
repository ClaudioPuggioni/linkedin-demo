// import { nanoid } from "@reduxjs/toolkit";
import React from "react";

export default function Main() {
  const handleLogin = () => {
    // console.log(process.env.REACT_APP_CLIENT_ID);
    // console.log(process.env.REACT_APP_SECRET_KEY);
    // window.location.replace("https://www.linkedin.com/oauth/v2/authorization");
    // const REDIRECT_URI = "https://linkedin-login-demo.netlify.app/profile";
    // const state = nanoid(21);
    // window.location.replace(
    //   `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=r_liteprofile`
    // );
  };

  return (
    <div className="login-container h-screen w-screen flex justify-center items-center bg-[#11053b]">
      <button
        className="login-btn px-11 py-4 bg-[#ff6a00] text-[23px] text-[#ffffff] rounded-lg font-semibold flex justify-center items-center"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
