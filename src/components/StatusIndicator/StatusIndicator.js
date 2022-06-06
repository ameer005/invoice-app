import React from "react";

const StatusIndicator = ({ data }) => {
  return (
    <div className={`status_box status_box--${data.status}`}>
      <span className={`circle circle--${data.status}`}></span>
      <div className={`status status--${data.status}`}>
        {data.status[0].toUpperCase() + data.status.slice(1)}
      </div>
    </div>
  );
};

export default StatusIndicator;
