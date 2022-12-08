import React from "react";
import "./notification.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  return <ToastContainer className="position-fixed right-0 top-0" />;
}

export default Notification;
