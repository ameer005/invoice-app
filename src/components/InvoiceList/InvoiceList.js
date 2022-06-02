import React from "react";
import { useSelector } from "react-redux";

import styles from "./InvoiceList.module.scss";

import InvoiceItem from "../InvoiceItem/InvoiceItem";

const InvoiceList = () => {
  const data = useSelector((state) => state.invoices.invoices);

  const renderItems = () => {
    if (!data.length) return;

    return data.map((invoice) => {
      return <InvoiceItem key={invoice.id} data={invoice} />;
    });
  };
  return <div className={styles.invoice_list}>{renderItems()}</div>;
};

export default InvoiceList;
