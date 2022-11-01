import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getData } from "../slices/apiSlice";

export default function Profile() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("code", searchParams.get("code"));
    console.log("code is", searchParams.get("code"));
    dispatch(getData());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <></>
    </div>
  );
}
