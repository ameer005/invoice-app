import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Formik, Form, FieldArray } from "formik";

import styles from "./ModalCreateInvoice.module.scss";

const ModalCreateInvoice = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div onClick={() => props.setShowModal(false)} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <h2 className={styles.form_heading}>Create Invoice</h2>
        <form className={styles.form}>
          {/* FORM BODY */}
          <div className={styles.form_body}>
            {/* section 1 */}
            <h3 className={styles.sub_heading}>Bill Form</h3>
            <section className={styles.form_grid}>
              <label
                className={`${styles.input_container} ${styles.input_container__1_1}`}
              >
                <span className={styles.label}>Street Address</span>
                <input className={styles.input} type="text" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__1_2}`}
              >
                <span className={styles.label}>City</span>
                <input className={styles.input} type="text" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__1_3}`}
              >
                <span className={styles.label}>Post Code</span>
                <input className={styles.input} type="number" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__1_4}`}
              >
                <span className={styles.label}>Country</span>
                <input className={styles.input} type="text" />
              </label>
            </section>

            {/* section 2 */}
            <h3 className={styles.sub_heading}>Bill To</h3>
            {/* CLIENT DETAILS */}
            <section className={styles.form_grid}>
              <label
                className={`${styles.input_container} ${styles.input_container__2_1}`}
              >
                <span className={styles.label}>Client's Name</span>
                <input className={styles.input} type="text" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__2_2}`}
              >
                <span className={styles.label}>Client's Email</span>
                <input className={styles.input} type="email" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__2_3}`}
              >
                <span className={styles.label}>Street Address</span>
                <input className={styles.input} type="number" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__2_4}`}
              >
                <span className={styles.label}>City</span>
                <input className={styles.input} type="text" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__2_5}`}
              >
                <span className={styles.label}>Post Code</span>
                <input className={styles.input} type="number" />
              </label>

              <label
                className={`${styles.input_container} ${styles.input_container__2_6}`}
              >
                <span className={styles.label}>Country</span>
                <input className={styles.input} type="text" />
              </label>

              <div className={styles.input_container__2_7}>
                <label className={`${styles.input_container}`}>
                  <span className={styles.label}>Invoice Date</span>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className={styles.input}
                  />
                </label>

                {/* Payment terms */}
                <label
                  className={`${styles.input_container} ${styles.input_container__2_8}`}
                >
                  <span className={styles.label}>Payment Terms</span>
                  <select className={`${styles.input} ${styles.select}`}>
                    <option value="Net 1 Day">Net 1 Day</option>
                    <option value="Net 7 Days">Net 7 Days</option>
                    <option value="Net 14 Days">Net 14 Days</option>
                    <option value="Net 30 Days">Net 30 Days</option>
                  </select>
                </label>
              </div>

              <label
                className={`${styles.input_container} ${styles.input_container__2_9}`}
              >
                <span className={styles.label}>Description</span>
                <input className={styles.input} type="text" />
              </label>
            </section>

            {/* DYNAMIC FORM */}
            <section className={styles.items_container}>
              <h3 className={styles.items_heading}>Item List</h3>
              <button
                type="button"
                className={`btn btn--edit ${styles.btn_add_item}`}
              >
                + Add New Item
              </button>
            </section>
          </div>

          {/* BUTTONS */}
          <div className={styles.form_buttons}>
            <button
              type="button"
              className={`btn btn--edit ${styles.btn_discard}`}
            >
              Discard
            </button>
            <button className={`btn btn--edit ${styles.btn_draft}`}>
              Save as Draft
            </button>
            <button
              type="submit"
              className={`btn btn--primary ${styles.btn_send}`}
            >
              Save & Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateInvoice;
