import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addKeyObject } from "../../reducers/localstorageSlice";

function RegisterForm() {
  const disptach = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    name: "",
    coupon: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const username = formFields.username;
      const password = formFields.password;
      const coupon = formFields.coupon;
      const name = formFields.name;
      if (!username || !password || !name) {
        setError("Please fill all fields.");
        return;
      }
      const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/register/`;
      const res = await axios({
        method: "post",
        url: apiURL,
        data: {
          username,
          password,
          name,
          coupon,
          password2: password,
          email: "",
        },
      });
      const { status, data } = res.data;
      if (status === 1) {
        // disptach(addKeyObject({ data: data.token }));
        // Object.keys(data.token).map((key) =>
        //   localStorage.setItem(key, data.token[key])
        // );

        return navigate("/login", { replace: true });
      }
      setError("User already exists.Please login.");
      return;
    } catch (err) {
      setError(err?.response?.data?.error ?? "Something went wrong.");
      // console.warn("error::", err.response);
    }
  };
  return (
    <div className="loginForm">
      <h1 className="header">Create Account</h1>
      <form onSubmit={handleRegister}>
        {error && <div className="text-danger text-center">{error}</div>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="usernamer"
            placeholder="Enter name"
            name="name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernamer"
            placeholder="Enter username"
            name="username"
            value={formFields.username}
            autoComplete="off"
            onChange={(e) =>
              setFormFields((prev) => ({
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
            aria-describedby="usernamer"
            placeholder="Enter coupon"
            name="coupon"
            value={formFields.coupon}
            onChange={(e) =>
              setFormFields((prev) => ({
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
              setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="signUpDiv">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="signupLink">
              Sign in
            </Link>
          </span>
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

export default RegisterForm;
