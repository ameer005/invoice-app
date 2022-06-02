import React from "react";

import styles from "./InvoicePage.module.scss";

import GoBackButton from "../../components/GoBackButton/GoBackButton";

const InvoicePage = () => {
  return (
    <div className="ut-flex-container">
      <div className={`${styles.invoice_details_container} ut-global-with`}>
        <GoBackButton />
        <div className={styles.top}>
          <div className={styles.top__left_group}>
            <p className={styles.heading}>Status</p>
          </div>
          <div className={styles.top__right_group}>right</div>
        </div>
        <div className={styles.bottom}>bottom</div>
      </div>
    </div>
  );
};

export default InvoicePage;
