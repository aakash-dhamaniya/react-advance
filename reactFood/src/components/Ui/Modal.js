import React from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={Classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
};
const protalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, protalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        protalElement
      )}
    </>
  );
}

export default Modal;
