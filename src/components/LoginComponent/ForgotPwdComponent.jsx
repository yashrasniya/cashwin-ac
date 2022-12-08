import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPwdComponent() {
  const [couponVerified, setVerifyCoupon] = useState(false);
  const [userid, setUserId] = useState(null);
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
    password2: "",
    coupon: "",
  });
  const [error, setError] = useState({ text: "", type: "error" });

  const handleForgotPwd = async (e) => {
    e.preventDefault();
    try {
      const password = loginDetail.password;
      const password2 = loginDetail.password2;
      if (!password || !password2) {
        setError("Please fill all fields.");
        return;
      }
      const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/forgot-password/`;
      const res = await axios({
        method: "post",
        url: apiURL,
        data: { userid, password, password2 },
      });
      const { status } = res.data;
      if (status === 1) {
        setError({
          type: "success",
          text: "Password updated, you can sign in.",
        });
        return;
      }
      setError({ text: "Error while updating password", type: "error" });
    } catch (error) {
      setError({ text: "Error while updating password", type: "error" });
    }
  };
  const verifyCouponFunc = async (e) => {
    e.preventDefault();
    try {
      const username = loginDetail.username;
      const coupon = loginDetail.coupon;
      if (!username || !coupon) {
        setError("Please fill all fields.");
        return;
      }
      const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/verify-coupon/`;
      const res = await axios({
        method: "post",
        url: apiURL,
        data: { username, coupon },
      });
      const { status, data = {}, msg = "" } = res.data;
      if (status === 1) {
        setUserId(data.id);
        setVerifyCoupon(true);
        return;
      }
      setError({ text: msg, type: "error" });
    } catch (error) {
      setError({ text: "Error while updating password", type: "error" });
    }
  };
  return (
    <div className="loginForm">
      <h1 className="header">Change password</h1>
      {error.text && (
        <div
          className={`${
            error.type === "error" ? "text-danger" : "text-success"
          } text-center`}
        >
          {error.text}
        </div>
      )}
      {!couponVerified && (
        <form onSubmit={verifyCouponFunc}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernamer"
              placeholder="Enter username"
              name="username"
              value={loginDetail.username}
              required
              onChange={(e) =>
                setLoginDetail((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="coupon">Coupon</label>
            <input
              type="text"
              className="form-control"
              id="coupon"
              aria-describedby="coupon"
              placeholder="Enter coupon"
              name="coupon"
              value={loginDetail.coupon}
              required
              onChange={(e) =>
                setLoginDetail((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="signUpDiv">
            <span>
              Click here to
              <Link to="/login" className="signupLink">
                Sign in
              </Link>
            </span>{" "}
          </div>
          <div className="submitBtn">
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </div>
        </form>
      )}
      {couponVerified && (
        <form onSubmit={handleForgotPwd}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setLoginDetail((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="cmppassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              onChange={(e) =>
                setLoginDetail((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="signUpDiv">
            <span>
              Click here to
              <Link to="/login" className="signupLink">
                Sign in
              </Link>
            </span>{" "}
          </div>
          <div className="submitBtn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ForgotPwdComponent;
