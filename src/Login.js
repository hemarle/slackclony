import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [state, dispatch] = useStateValue();
  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((success) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: success.user,
        });
        console.log(success);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src=" https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt="hello"
        />
        <h1> Sign in to slack clony</h1>
        <Button onClick={handleLogin}>Login using google</Button>
      </div>
    </div>
  );
}

export default Login;
