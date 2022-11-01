import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { code } = useParams();
  useEffect(() => {
    localStorage.setItem("code", code);
    console.log("code is", code);
  }, []);

  return (
    <div>
      <></>
    </div>
  );
}
