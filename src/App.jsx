import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./app.scss";
import Routing from "./routes";
import { readAllKeys } from "./reducers/localstorageSlice";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("load local to redux");
    dispatch(readAllKeys(localStorage));
  }, []);
  return (
    <div className="container-fluid main">
      <Routing />
    </div>
  );
}
