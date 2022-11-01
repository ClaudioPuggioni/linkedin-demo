import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../slices/apiSlice";

export default function Profile() {
  let { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("code", code);
    console.log("code is", code);
    dispatch(getData());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <></>
    </div>
  );
}
