import { nanoid } from "@reduxjs/toolkit";
import React from "react";

export default function Main() {
  const handleLogin = () => {
    const REDIRECT_URI = "https://linkedin-login-demo.netlify.app/profile";
    // const REDIRECT_URI = "http://localhost:3000/profile";
    const state = nanoid(21);
    console.log("STATE is:", state);
    window.location.replace(
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=r_liteprofile`
    );
  };

  return (
    <div className="login-container h-screen w-screen flex justify-center items-center bg-[#a498d1]">
      <button
        className="login-btn pl-8 pr-11 py-4 bg-[#ffffff] text-[26px] text-[#000000] rounded-lg font-semibold flex justify-center items-center hover:bg-[#ffffff] hover:shadow-custom"
        onClick={handleLogin}
      >
        <img className="w-[40px]" src="assets/linkedin.png" alt="linkediin logo" />
        &nbsp;&nbsp;Login
      </button>
    </div>
  );
}
