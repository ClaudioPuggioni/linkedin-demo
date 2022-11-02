import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../slices/apiSlice";

export default function Profile() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.cabinet);

  useEffect(() => {
    if (searchParams.get("code") !== null) localStorage.setItem("code", searchParams.get("code"));
    console.log("code is", localStorage.getItem("code"));

    console.log("URL is", window.location.href);
    if (window.location.href !== "https://linkedin-login-demo.netlify.app/profile") {
      window.location.replace("https://linkedin-login-demo.netlify.app/profile");
      dispatch(getData());
    }
    // if (window.location.href !== "http://localhost:3000/profile") {
    //   window.location.replace("http://localhost:3000/profile");
    // }
    // if (window.location.href === "http://localhost:3000/profile") {
    //   dispatch(getData());
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="profile-container h-screen w-screen flex justify-center items-center bg-[#393545]">
      <div className="profile-card p-10 flex flex-col items-center h-[700px] w-[500px] bg-[#fff3e9] rounded-xl border-4 border-[#d06a22] ">
        {userInfo ? <img className="w-[300px] rounded-lg border-2" src={userInfo.src} alt="profile" /> : null}
        <div className="profile-text pt-5 text-[27px] font-semibold">
          {userInfo ? userInfo.name : null}
          &nbsp;
          {userInfo ? userInfo.surname : null}
        </div>
      </div>
    </div>
  );
}
