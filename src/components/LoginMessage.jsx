// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  cconsole.log(isLoggedIn)
  return <div>{isLoggedIn==true?"Hello, User!":"Access Denied"}</div>;
}

export default LoginMessage;
