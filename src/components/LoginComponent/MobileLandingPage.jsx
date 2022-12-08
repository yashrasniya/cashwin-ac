import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginComponents from "./LoginComponents";

function MobileLandingPage(props) {
  const search = useLocation().search;
  const isLogin = new URLSearchParams(search).get("isLogin");
  const { isSignUp = false, isForgotPwd = false } = props;
  const navigate = useNavigate();
  return (
    <div className="mobileLandingPageMain">
      <div
        className="mobileBackgroundDiv"
        style={{
          backgroundImage: `url(/assets/images/mobile_landing_page.png)`,
        }}
      >
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>

      {(isSignUp || isForgotPwd || isLogin) && (
        <LoginComponents isSignUp={isSignUp} isForgotPwd={isForgotPwd} />
      )}
      {!isSignUp && !isForgotPwd && !isLogin && (
        <div className="content">
          <div className="wrapper">
            <div className="header">Welcome to Online Casino</div>
            <div className="desc">
              Online casinos, also known as virtual casinos or Internet casinos,
              are online versions of traditional casinos. Online casinos enable
              gamblers to play and wager on casino games through the Internet.
            </div>
            <div className="authButtons">
              <button
                type="button"
                onClick={() => navigate("/login?isLogin=true")}
                className="btn btn-primary"
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="btn btn-secondary"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileLandingPage;
