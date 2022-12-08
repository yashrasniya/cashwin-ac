import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./changePassword.scss";
function ChangePasswordComponent(props) {
  const { access = "", refresh = "" } = props.localstorage;
  console.log(access);
  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    password2: "",
  });
  const [notify, setNotify] = useState({
    type: "success",
    text: "",
  });
  useEffect(() => {}, []);
  const handleChangePwd = async (e) => {
    try {
      e.preventDefault();
      const { currentPassword = "", password = "", password2 = "" } = formData;
      if (!currentPassword || !password || !password2) {
        setNotify({
          text: "Please fill all fields.",
          type: "error",
        });
        return;
      }
      if (password !== password2) {
        setNotify({
          text: "Please password and confirm password doesnot match.",
          type: "error",
        });
        return;
      }
      setNotify({
        text: "Password successfully updated.",
        type: "success",
      });
    } catch (error) {
      setNotify((prev) => ({
        ...prev,
        text: "Error while resetting password.",
        type: "error",
      }));
    }
  };
  return (
    <div className="container changePasswordDiv">
      <form className="resetPwdForm" onSubmit={handleChangePwd}>
        {notify.text && (
          <div
            className={`${
              notify.type === "success" ? "text-success" : "text-danger"
            } text-center mb-3`}
          >
            {notify.text}
          </div>
        )}
        <div className="row inputRow">
          <div className="col-12">
            <label htmlFor="curPassword" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              id="curPassword"
              className="form-control"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="row inputRow resetNewPwdFields">
          <div className="col-6">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              id="newPassword"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="col-6">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter new password to confirm"
              id="confirmPassword"
              className="form-control"
              name="password2"
              value={formData.password2}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="submitBtnDiv">
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

export default connect(mapStateToProps, {})(ChangePasswordComponent);
