import React from "react";
import { Modal } from "react-bootstrap";
import "./resultModal.scss";
function ResultModal({ children }) {
  return (
    <div>
      <Modal show={true} className={`custom-result-modal `}>
        <Modal.Header className="modalHeader">
          Result Details
          <span className="close-icon" aria-hidden="true">
            &times;
          </span>
        </Modal.Header>
        {children}
      </Modal>
    </div>
  );
}

export default ResultModal;
