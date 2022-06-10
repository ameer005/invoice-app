import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "./InvoicePage.module.scss";

import { deleteInvoice, MarkAsPaid } from "../../features/invoice/invoiceSlice";

import GoBackButton from "../../components/GoBackButton/GoBackButton";
import StatusIndicator from "../../components/StatusIndicator/StatusIndicator";
import dateFormatter from "../../utils/dateFormatter";
import currencyFormatter from "../../utils/currencyFormatter";

const InvoicePage = () => {
  const { id } = useParams();
  const [data] = useSelector((state) =>
    state.invoices.invoices.filter((invoice) => invoice.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!data) return;

  const OnDeleteInvoice = () => {
    dispatch(deleteInvoice(id));
    navigate(-1);
  };

  const onClickPaid = () => {
    dispatch(MarkAsPaid(id));
  };

  const renderItems = () => {
    return data.items.map((item, index) => {
      return (
        <div key={index} className={`${styles.item_list} ${styles.items_grid}`}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.quantity}>{item.quantity}</div>
          <div className={styles.price}>
            {currencyFormatter.format(item.price)}
          </div>
          <div className={styles.total}>
            {currencyFormatter.format(item.total)}
          </div>
        </div>
      );
    });
  };

  const calculateTotal = () => {
    let total = 0;
    data.items.forEach((item) => (total += item.total));

    return total;
  };

  return (
    <div className="ut-flex-container">
      <div className={`${styles.invoice_details_container} ut-global-with-m`}>
        <GoBackButton />
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.top__left_group}>
            <p className={styles.heading}>Status</p>
            <StatusIndicator data={data} />
          </div>
          <div className={styles.top__right_group}>
            <button className="btn btn--edit">Edit</button>
            <button className="btn btn--delete" onClick={OnDeleteInvoice}>
              Delete
            </button>
            {data.status !== "paid" && (
              <button onClick={onClickPaid} className="btn btn--paid">
                Mark As Paid
              </button>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          {/* description */}
          <div className={styles.description_box}>
            <div className={styles.id}>
              <span>#</span>
              {data.id}
            </div>
            <div className={styles.description}>{data.description}</div>
          </div>

          {/* sender address */}
          <div className={styles.sender_address}>
            <div className={styles.street}>{data.senderAddress.street}</div>
            <div className={styles.city}>{data.senderAddress.city}</div>
            <div className={styles.post_code}>
              {data.senderAddress.postCode}
            </div>
            <div className={styles.country}>{data.senderAddress.country}</div>
          </div>

          {/* invoice date */}
          <div className={styles.date_group}>
            <div className={styles.invoice}>
              <div className={styles.small_heading}>Invoice Date</div>
              <div className={styles.common_info}>
                {dateFormatter(data.createdAt)}
              </div>
            </div>

            <div className={styles.payment_due}>
              <div className={styles.small_heading}>Payment Due</div>
              <div className={styles.common_info}>
                {dateFormatter(data.paymentDue)}
              </div>
            </div>
          </div>

          {/* bill to */}
          <div className={styles.bill_to}>
            <div className={styles.small_heading}>Bill To</div>
            <div className={styles.common_info}>{data.clientName}</div>

            <div className={styles.client_address}>
              <div className={styles.street}>{data.clientAddress.street}</div>
              <div className={styles.city}>{data.clientAddress.city}</div>
              <div className={styles.post_code}>
                {data.clientAddress.postCode}
              </div>
              <div className={styles.country}>{data.clientAddress.country}</div>
            </div>
          </div>

          {/* sent to */}
          <div className={styles.sent_to}>
            <div className={styles.small_heading}>Sent To</div>
            <div className={styles.common_info}>{data.clientEmail}</div>
          </div>

          <div className={styles.footer}>
            <div className={`${styles.item_container} `}>
              <div className={styles.items_grid}>
                <div className={`${styles.item_name} `}>Item Name</div>
                <div className={`${styles.quantity_name} `}>QYT.</div>
                <div className={`${styles.price_name} `}>Price</div>
                <div className={`${styles.total_name} `}>Total</div>
                {renderItems()}
              </div>
            </div>

            <div className={styles.grand_total_box}>
              <div className={styles.deu}>Amount Deu</div>
              <div className={styles.deu_amount}>
                {currencyFormatter.format(calculateTotal())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
