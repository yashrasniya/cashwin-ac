import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPwdComponent from "./ForgotPwdComponent";

function LoginComponents(props) {
  const { isSignUp = false, isForgotPwd = props } = props;

  return (
    <div className="loginMainDiv">
      <div className="leftSide">
        <Link className="loginLogo" to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <span>Best For Online Casino</span>
      </div>
      <div className="rightSide">
        {!isSignUp && !isForgotPwd && <LoginForm />}
        {isSignUp && <RegisterForm />}
        {isForgotPwd && <ForgotPwdComponent />}
      </div>
    </div>
  );
}

export default LoginComponents;
