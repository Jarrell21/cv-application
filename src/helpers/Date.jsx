const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDateToYearAndMonth(dateStr) {
  var tempDate = dateStr.split("-");
  return tempDate[0] + " " + months[Number(tempDate[1]) - 1];
}

function convertDateToCompleteDate(dateStr) {
  var tempDate = dateStr.split("-");
  return `${months[Number(tempDate[1]) - 1]} ${tempDate[2]}, ${tempDate[0]}`;
}

export { convertDateToYearAndMonth, convertDateToCompleteDate };
