import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addKeyObject } from "./../../reducers/localstorageSlice";
import axios from "axios";

function LoginForm(props) {
  const { addKeyObject } = props;
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("handleSubmit", loginDetail);
      const username = loginDetail.username;
      const password = loginDetail.password;
      if (!username || !password) {
        setError("Please fill all fields.");
        return;
      }
      const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/login/`;
      const res = await axios({
        method: "post",
        url: apiURL,
        data: { username, password },
      });
      const { status, data } = res.data;
      if (status === 1) {
        console.log("success::::", data);
        addKeyObject({ data: { ...data.token, user: data.user ?? "Anonmas" } });
        Object.keys(data.token).map((key) =>
          localStorage.setItem(key, data.token[key])
        );
        localStorage.setItem("user", data.user);

        return navigate("/", { replace: true });
      }
      setError(data.msg);
      return;
    } catch (err) {
      console.warn("error::", err);
    }
  };
  return (
    <div className="loginForm">
      <h1 className="header">Sign in</h1>
      <form onSubmit={handleLogin}>
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
            onChange={(e) =>
              setLoginDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
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
          {error && <div className="text-danger text-center mt-3">{error}</div>}
        </div>
        <div className="signUpDiv">
          <span>
            New User?{" "}
            <Link to="/register" className="signupLink">
              Create Account
            </Link>
          </span>
          <Link to="/forgotPwd">Forgot Password?</Link>
        </div>
        <div className="submitBtn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ localstorage }) => ({
  localstorage,
});
const mapDispatchToProps = {
  addKeyObject,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
