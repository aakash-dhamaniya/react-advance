import React from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const protalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        protalElement
      )}
    </>
  );
}

export default Modal;
