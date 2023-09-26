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

function convertDate(dateStr) {
  var tempDate = dateStr.split("-");
  return tempDate[0] + " " + months[Number(tempDate[1]) - 1];
}

export { convertDate };
