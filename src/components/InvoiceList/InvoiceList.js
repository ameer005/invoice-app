import React from "react";
import { useSelector } from "react-redux";
import emptyCart from "../../assets/icons/illustration-empty.svg";

import styles from "./InvoiceList.module.scss";

import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoiceList = (props) => {
  const data = useSelector((state) => state.invoices.invoices);

  let listData;
  if (props.filter === "status") listData = data;
  else listData = data.filter((item) => item.status === props.filter);

  const renderItems = () => {
    if (!data.length) return;

    return listData.map((invoice) => {
      return <InvoiceItem key={invoice.id} data={invoice} />;
    });
  };
  return (
    <>
      {listData.length > 0 && (
        <div className={styles.invoice_list}>{renderItems()}</div>
      )}
      {listData.length === 0 && (
        <div className={styles.empty_container}>
          <img className={styles.empty_img} src={emptyCart} alt="empty img" />
          <h3 className={styles.empty_heading}>There is nothing here</h3>
          <p className={styles.empty_text}>
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      )}
    </>
  );
};

export default InvoiceList;
