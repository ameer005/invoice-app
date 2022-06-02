const dateFormatter = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(inputDate);

  return `${String(date.getDay()).padStart(2, 0)} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
};

export default dateFormatter;
