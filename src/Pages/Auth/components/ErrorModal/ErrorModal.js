import React from "react";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div className="backdrop" onClick={props.onConfirm}>
      <div className="modal">
        <div className="content-modal">
          <div className="content">
            <p>{props.message}</p>
          </div>
          <div className="actions">
            <button className="btn-primaire" onClick={props.onConfirm}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
