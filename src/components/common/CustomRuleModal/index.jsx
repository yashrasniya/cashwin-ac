import React from "react";
import { Modal } from "react-bootstrap";
import "./customModal.scss";

function CustomRuleModal(props) {
  const { show = "false", handleHide, customClass = "", children } = props;
  return (
    <div>
      <Modal show={show} className={`custom-modal ${customClass}`}>
        <Modal.Header className="modalHeader">
          Rules
          <span className="close-icon" onClick={handleHide} aria-hidden="true">
            &times;
          </span>
        </Modal.Header>
        {children}
      </Modal>
    </div>
  );
}

export default CustomRuleModal;
