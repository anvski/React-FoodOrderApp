import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalToElement = document.getElementById("modal-overlay");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClick}/>, portalToElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalToElement
      )}
    </React.Fragment>
  );
};

export default Modal;
