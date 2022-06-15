import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

import { Formik, Form, FieldArray, Field } from "formik";
import validationSchema from "../../utils/YupSchema";

import styles from "./ModalCreateInvoice.module.scss";
import trashicon from "../../assets/icons/icon-delete.svg";
import idGenrator from "../../utils/idGenrator";
import { addInvoice, updateInvoice } from "../../features/invoice/invoiceSlice";

const ModalCreateInvoice = (props) => {
  const [statusVal, setStatusVal] = useState("pending");
  const dispatch = useDispatch();

  const currentDate = new Date();

  const initialValues = {
    id: props.data ? props.data.id : "",
    createdAt: dayjs().format("YYYY/MM/DD"),
    paymentDue: props.data ? new Date(props.data.paymentDue) : currentDate,
    description: props.data ? props.data.description : "",
    paymentTerms: props.data ? props.data.paymentTerms : "",
    clientName: props.data ? props.data.clientName : "",
    clientEmail: props.data ? props.data.clientEmail : "",
    status: props.data ? props.data.status : "",
    senderAddress: {
      street: props.data ? props.data.senderAddress.street : "",
      city: props.data ? props.data.senderAddress.city : "",
      postCode: props.data ? props.data.senderAddress.postCode : "",
      country: props.data ? props.data.senderAddress.country : "",
    },
    clientAddress: {
      street: props.data ? props.data.clientAddress.street : "",
      city: props.data ? props.data.clientAddress.city : "",
      postCode: props.data ? props.data.clientAddress.postCode : "",
      country: props.data ? props.data.clientAddress.country : "",
    },
    items: props.data ? props.data.items : [],
    total: props.data ? props.data.total : 0,
  };

  const onSubmit = (values) => {
    const total = () => {
      let totalAmt = 0;
      values.items.forEach((item) => {
        totalAmt += item.total;
      });

      return totalAmt;
    };

    if (!props.data) {
      dispatch(
        addInvoice({
          ...values,
          total: total(),
          status: statusVal,
          id: idGenrator(),
          paymentDue: dayjs(values.paymentDue).format("YYYY/MM/DD"),
        })
      );
    } else {
      dispatch(
        updateInvoice({
          ...values,
          total: total(),
          status: statusVal,
          id: props.data.id,
          paymentDue: dayjs(values.paymentDue).format("YYYY/MM/DD"),
          status: props.data.status,
        })
      );
    }

    props.setShowModal(false);
  };

  return (
    <div onClick={() => props.setShowModal(false)} className={styles.backdrop}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched, value, handleChange, setFieldValue }) => (
            <Form className={styles.form}>
              <h2 className={styles.form_heading}>Create Invoice</h2>
              {/* FORM BODY */}
              <div className={styles.form_body}>
                {/* section 1 */}
                <h3 className={styles.sub_heading}>Bill Form</h3>
                <section className={styles.form_grid}>
                  <label
                    className={`${styles.input_container} ${styles.input_container__1_1}`}
                  >
                    <span className={styles.label}>Street Address</span>
                    <Field
                      className={`${styles.input} ${
                        touched.senderAddress?.street &&
                        errors.senderAddress?.street &&
                        styles.input_error
                      }`}
                      type="text"
                      name="senderAddress.street"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__1_2}`}
                  >
                    <span className={styles.label}>City</span>
                    <Field
                      className={`${styles.input} ${
                        touched.senderAddress?.city &&
                        errors.senderAddress?.city &&
                        styles.input_error
                      }`}
                      type="text"
                      name="senderAddress.city"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__1_3}`}
                  >
                    <span className={styles.label}>Post Code</span>
                    <Field
                      className={`${styles.input} ${
                        touched.senderAddress?.postCode &&
                        errors.senderAddress?.postCode &&
                        styles.input_error
                      }`}
                      type="text"
                      name="senderAddress.postCode"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__1_4}`}
                  >
                    <span className={styles.label}>Country</span>
                    <Field
                      className={`${styles.input} ${
                        touched.senderAddress?.country &&
                        errors.senderAddress?.country &&
                        styles.input_error
                      }`}
                      type="text"
                      name="senderAddress.country"
                    />
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
                    <Field
                      className={`${styles.input} ${
                        touched.clientName &&
                        errors.clientName &&
                        styles.input_error
                      }`}
                      type="text"
                      name="clientName"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_2}`}
                  >
                    <span className={styles.label}>Client's Email</span>
                    <Field
                      className={`${styles.input} ${
                        touched.clientEmail &&
                        errors.clientEmail &&
                        styles.input_error
                      }`}
                      type="email"
                      name="clientEmail"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_3}`}
                  >
                    <span className={styles.label}>Street Address</span>
                    <Field
                      className={`${styles.input} ${
                        touched.clientAddress?.street &&
                        errors.clientAddress?.street &&
                        styles.input_error
                      }`}
                      type="text"
                      name="clientAddress.street"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_4}`}
                  >
                    <span className={styles.label}>City</span>
                    <Field
                      className={`${styles.input} ${
                        touched.clientAddress?.city &&
                        errors.clientAddress?.city &&
                        styles.input_error
                      }`}
                      type="text"
                      name="clientAddress.city"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_5}`}
                  >
                    <span className={styles.label}>Post Code</span>
                    <Field
                      className={`${styles.input} ${
                        touched.clientAddress?.postCode &&
                        errors.clientAddress?.postCode &&
                        styles.input_error
                      }`}
                      type="text"
                      name="clientAddress.postCode"
                    />
                  </label>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_6}`}
                  >
                    <span className={styles.label}>Country</span>
                    <Field
                      className={`${styles.input} ${
                        touched.clientAddress?.country &&
                        errors.clientAddress?.country &&
                        styles.input_error
                      }`}
                      type="text"
                      name="clientAddress.country"
                    />
                  </label>

                  <div className={styles.input_container__2_7}>
                    <label className={`${styles.input_container}`}>
                      <span className={styles.label}>Invoice Date</span>
                      <Field name="paymentDue">
                        {({ form, field }) => {
                          //programticaly set values
                          const { setFieldValue } = form;
                          const { value } = field;
                          return (
                            <ReactDatePicker
                              // placeholderText="click to select a date"
                              className={`${styles.input}`}
                              selected={value}
                              onChange={(val) =>
                                setFieldValue("paymentDue", val)
                              }
                            />
                          );
                        }}
                      </Field>
                    </label>

                    {/* Payment terms */}
                    <label
                      className={`${styles.input_container} ${styles.input_container__2_8}`}
                    >
                      <span className={styles.label}>Payment Terms</span>
                      <Field
                        as="select"
                        className={`${styles.input} ${styles.select}`}
                        name="paymentTerms"
                      >
                        <option value="1">Net 1 Day</option>
                        <option value="7">Net 7 Days</option>
                        <option value="14">Net 14 Days</option>
                        <option value="30">Net 30 Days</option>
                      </Field>
                    </label>
                  </div>

                  <label
                    className={`${styles.input_container} ${styles.input_container__2_9}`}
                  >
                    <span className={styles.label}>Description</span>
                    <Field
                      className={`${styles.input} ${
                        touched.description &&
                        errors.description &&
                        styles.input_error
                      }`}
                      type="text"
                      name="description"
                    />
                  </label>
                </section>

                {/* DYNAMIC FORM */}
                <section className={styles.items_container}>
                  <h3 className={styles.items_heading}>Item List</h3>
                  <FieldArray name="items">
                    {({ push, remove, form }) => (
                      <>
                        {form.values.items.map((item, index) => {
                          return (
                            <div key={index} className={styles.items}>
                              <label
                                className={`${styles.input_item_container} ${styles.input_item_container__1}`}
                              >
                                <span className={styles.label}>Item Name</span>
                                <Field
                                  className={styles.input}
                                  type="text"
                                  name={`items[${index}].name`}
                                />
                              </label>

                              <label
                                className={`${styles.input_item_container} ${styles.input_item_container__2}`}
                              >
                                <span className={styles.label}>Qty.</span>
                                <Field
                                  className={styles.input}
                                  type="number"
                                  name={`items[${index}].quantity`}
                                  onChange={(e) => {
                                    handleChange(e);
                                    const total = form.values.items[index].price
                                      ? e.target.value *
                                        form.values.items[index].price
                                      : 0;
                                    setFieldValue(
                                      `items[${index}].total`,
                                      total
                                    );
                                  }}
                                />
                              </label>

                              <label
                                className={`${styles.input_item_container} ${styles.input_item_container__3}`}
                              >
                                <span className={styles.label}>Price</span>
                                <Field
                                  className={styles.input}
                                  type="number"
                                  name={`items[${index}].price`}
                                  onChange={(e) => {
                                    handleChange(e);
                                    const total = form.values.items[index]
                                      .quantity
                                      ? e.target.value *
                                        form.values.items[index].quantity
                                      : 0;
                                    setFieldValue(
                                      `items[${index}].total`,
                                      total
                                    );
                                  }}
                                />
                              </label>

                              <label
                                className={`${styles.input_item_container} ${styles.input_item_container__4}`}
                              >
                                <span className={styles.label}>Total</span>
                                <Field
                                  disabled
                                  className={styles.input}
                                  type="number"
                                  name={`items[${index}].total`}
                                />
                              </label>

                              <img
                                className={styles.icon_delete}
                                onClick={() => remove(index)}
                                src={trashicon}
                                alt=""
                              />
                            </div>
                          );
                        })}

                        <button
                          type="button"
                          onClick={() =>
                            push({
                              name: "",
                              quantity: "",
                              price: "",
                              total: "",
                            })
                          }
                          className={`btn btn--edit ${styles.btn_add_item}`}
                        >
                          + Add New Item
                        </button>
                      </>
                    )}
                  </FieldArray>
                </section>

                {/* <div
                  className={`${styles.error_text} ${
                    errors ? styles.error_active : ""
                  }`}
                >
                  -All fields must be filled.
                </div> */}
              </div>

              {/* BUTTONS */}
              <div className={styles.form_buttons}>
                <button
                  onClick={() => props.setShowModal(false)}
                  type="button"
                  className={`btn btn--edit ${styles.btn_discard}`}
                >
                  Discard
                </button>

                {!props.data && (
                  <button
                    onClick={() => setStatusVal("draft")}
                    className={`btn btn--edit ${styles.btn_draft}`}
                  >
                    Save as Draft
                  </button>
                )}

                <button
                  type="submit"
                  className={`btn btn--primary ${styles.btn_send} ${
                    props.data && styles.mar
                  }`}
                >
                  {!props.data ? `Save & Send` : "Save Changes"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalCreateInvoice;
