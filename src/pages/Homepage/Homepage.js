import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./HomePage.module.scss";

import arrowDown from "../../assets/icons/icon-arrow-down.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import InvoiceList from "../../components/InvoiceList/InvoiceList";
import ModalCreateInvoice from "../../components/ModalCreateInvoice/ModalCreateInvoice";

const Homepage = () => {
  const data = useSelector((state) => state.invoices.invoices);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState("status");

  const onClickPaid = () => {
    filter === "paid" ? setFilter("status") : setFilter("paid");
  };

  const onClickPending = () => {
    filter === "pending" ? setFilter("status") : setFilter("pending");
  };

  const onClickDraft = () => {
    filter === "draft" ? setFilter("status") : setFilter("draft");
  };

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
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className={`${styles.dropdown_btn} `}
            >
              <span>
                Filter <span className={styles.by_status}>by status</span>
              </span>
              <img className="arrow" src={arrowDown} alt="arrow down" />
            </div>
            {/* filter dropdown */}
            <div
              className={`${styles.dropdown_menu} ${
                showDropdown ? styles.dropdown_toggle : ""
              }`}
            >
              {/* filter paid */}
              <div onClick={onClickPaid} className={styles.filter_option}>
                <div
                  className={`${styles.filter_checkbox} ${
                    filter === "paid" && styles.active
                  }`}
                ></div>
                <p className={styles.filter_name}>Paid</p>
              </div>

              {/* filter pending */}
              <div onClick={onClickPending} className={styles.filter_option}>
                <div
                  className={`${styles.filter_checkbox} ${
                    filter === "pending" && styles.active
                  }`}
                ></div>
                <p className={styles.filter_name}>Pending</p>
              </div>

              {/* Filter Draft */}
              <div onClick={onClickDraft} className={styles.filter_option}>
                <div
                  className={`${styles.filter_checkbox} ${
                    filter === "draft" && styles.active
                  }`}
                ></div>
                <p className={styles.filter_name}>Draft</p>
              </div>
            </div>
          </div>

          {/* Add button */}
          <button
            onClick={() => setShowModal(true)}
            className={`${styles.btn_add} btn btn--primary`}
          >
            <div className={styles.icon_box}>
              <img className={styles.plus_icon} src={plusIcon} alt="plus" />
            </div>
            <span>
              New <span className={styles.new_invoice}> Invoice </span>
            </span>
          </button>
        </div>

        {/* invoices List */}
        <div className={styles.bottom}>
          <InvoiceList />
        </div>
      </div>
      {showModal && <ModalCreateInvoice setShowModal={setShowModal} />}
    </div>
  );
};

export default Homepage;
