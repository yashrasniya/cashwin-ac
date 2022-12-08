import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateKeyObject } from "../../../reducers/localstorageSlice";
import { fetchExpToken } from "../../../utils/Utils";
import { toggleHamburger } from "./../../../reducers/commonSlice";

function Profile(props) {
  const { dropdown = false, toggleHamburger = () => {} } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localstorage = useSelector((state) => state.localstorage);
  const userData = localstorage.user
    ? JSON.parse(localstorage.user)
    : JSON.parse(window.localStorage.getItem("user"));
  const [amount, setAmount] = useState(0);
  const fetchToken = async () => {
    const res = await fetchExpToken();

    const { status, data } = res;
    if (status === 200) {
      dispatch(updateKeyObject(data));
      return;
    }
    return;
  };
  useEffect(() => {
    if (!localstorage.exposure_token) {
      fetchToken();
    }
  }, []);
  useLayoutEffect(() => {
    setAmount(localstorage.token - localstorage.exposure_token);
  }, [localstorage.exposure_token, localstorage.token]);
  return (
    <div className="profileDiv">
      <div className="profileImage">
        <img
          onClick={() => toggleHamburger()}
          src="/assets/tempImages/avatar.svg"
          alt=""
        />
      </div>
      <div className="userDetails">
        <div className="userName text-capitalize">{userData.username}</div>
        <div className="userCode text-capitalize">
          {!dropdown
            ? `${Math.floor(localstorage.exposure_token)} | ${amount}`
            : `${userData.name} | ${userData.coupon}`}
        </div>
      </div>
    </div>
  );
}

export default connect(null, {})(Profile);
