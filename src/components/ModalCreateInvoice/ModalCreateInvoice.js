import React from "react";
import ReactDom from "react-dom";
import styles from "./ModalCreateInvoice.module.scss";

const ModalCreateInvoice = (props) => {
  return ReactDom.createPortal(
    <div onClick={() => props.setShowModal(false)} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}></div>
    </div>,
    document.getElementById("modal-invoice")
  );
};

export default ModalCreateInvoice;
