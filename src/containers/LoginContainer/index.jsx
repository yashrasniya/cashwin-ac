import React from "react";
import MobileLandingPage from "../../components/LoginComponent/MobileLandingPage";
import LoginComponents from "../../components/LoginComponent";
import "../../components/LoginComponent/loginComponents.scss";

function LoginContainer(props) {
  const { isSignUp = false, isForgotPwd = false, isLogin = false } = props;
  return (
    <>
      <div className="showOnMobile">
        <MobileLandingPage
          isSignUp={isSignUp}
          isForgotPwd={isForgotPwd}
          isLogin={isLogin}
        />
      </div>
      <div className="hideOnMobile">
        <LoginComponents isSignUp={isSignUp} isForgotPwd={isForgotPwd} />
        <div
          className="backgroundDiv"
          style={{
            backgroundImage: `url(/assets/images/sexy-woman-blac.png)`,
          }}
        />
      </div>
    </>
  );
}

export default LoginContainer;
