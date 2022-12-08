import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchButtonValue, updateButtonValueApi } from "../../utils/Utils";
import {
  getButtonValues,
  updateButtonValues,
} from "./../../reducers/menuSlice";
import "./setButtonValue.scss";
function SetButtonValueComponent(props) {
  const { getButtonValues, buttonValues = [], updateButtonValues } = props;
  const [btnValueField, setBtnValueField] = useState({
    label: "",
    value: "",
  });
  const getButtonValue = async () => {
    const res = await fetchButtonValue();
    getButtonValues({ data: res });
  };
  useEffect(() => {
    getButtonValue();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btnValueFormData = new FormData();
    btnValueFormData.append("label", btnValueField.label);
    btnValueFormData.append("value", btnValueField.value);
    const res = await updateButtonValueApi(btnValueFormData);
    updateButtonValues({ data: res });
    setBtnValueField({
      label: "",
      value: "",
    });
  };
  return (
    <div className="container setButtonValueDiv">
      <div className="row header">
        <div className="col-6"> Price Label</div>
        <div className="col-6"> Price Value</div>
      </div>
      <form className="valueForm">
        {buttonValues.map((data, i) => (
          <div key={`key-${i}`} className="row inputRow">
            <div className="col-6">
              {/* <input
                type="number"
                min="0"
                className="form-control"
                value={data.label}
              /> */}
              <div className="btnValueDiv">{data.label}</div>
            </div>
            <div className="col-6">
              <div className="btnValueDiv">{data.value}</div>
              {/* <input
                type="number"
                min="0"
                className="form-control"
                value={data.value}
              /> */}
            </div>
          </div>
        ))}
        <div key={`key-input`} className="row inputRow">
          <div className="col-6">
            <input
              type="number"
              min="0"
              className="form-control"
              value={btnValueField.label}
              onChange={(e) =>
                setBtnValueField((prev) => {
                  return { ...prev, label: e.target.value };
                })
              }
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              min="0"
              className="form-control"
              value={btnValueField.value}
              onChange={(e) =>
                setBtnValueField((prev) => {
                  return { ...prev, value: e.target.value };
                })
              }
            />
          </div>
        </div>
        <div className="submitBtnDiv">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ menuData }) => ({
  buttonValues: menuData.buttonValues,
});
const mapDispatchToProps = {
  getButtonValues,
  updateButtonValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetButtonValueComponent);
