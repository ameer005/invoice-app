import React from "react";
import { useSelector } from "react-redux";

import styles from "./HomePage.module.scss";

import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import InvoiceList from "../../components/InvoiceList/InvoiceList";

const Homepage = () => {
  const data = useSelector((state) => state.invoices.invoices);

  return (
    <div className="ut-flex-container">
      <div className={`${styles.invoice_container} ut-global-with`}>
        {/* header */}
        <div className={styles.top}>
          <div className={styles.name_box}>
            <h1 className={styles.app_name}>Invoices</h1>
            <p
              className={styles.quantity}
            >{`There are ${data.length} total invoices.`}</p>
          </div>
          <div className={styles.filter_box}>
            <div className={styles.dropdown_btn}>
              <span>Filter by status</span>
              <img className="arrow" src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <button className={`${styles.btn_add} btn btn--primary`}>
            <div className={styles.icon_box}>
              <img className={styles.plus_icon} src={plusIcon} alt="plus" />
            </div>
            <span>New Invoice</span>
          </button>
        </div>

        {/* invoices List */}
        <div className={styles.bottom}>
          <InvoiceList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
