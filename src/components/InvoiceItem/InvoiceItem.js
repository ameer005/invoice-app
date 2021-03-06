import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./InvoiceItem.module.scss";

import currencyFormatter from "../../utils/currencyFormatter";
import dateFormatter from "../../utils/dateFormatter";
import arrowRight from "../../assets/icons/icon-arrow-right.svg";
import StatusIndicator from "../StatusIndicator/StatusIndicator";

const InvoiceItem = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/invoice/${data.id}`)}
      className={styles.item_container}
    >
      <div className={styles.left_box}>
        <div className={styles.id}>
          <span>#</span>
          {`${data.id}`}
        </div>
        <div className={styles.due_date}>{`Due ${dateFormatter(
          data.paymentDue
        )}`}</div>
        <div className={styles.client_name}>{data.clientName}</div>
      </div>
      <div className={styles.right_box}>
        <div className={styles.amount}>
          {currencyFormatter.format(data.total)}
        </div>
        <div className={styles.right_container}>
          <StatusIndicator data={data} />
          <img
            className={styles.arrow_right}
            src={arrowRight}
            alt="arrow right"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
