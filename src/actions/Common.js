
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';

export const DateFormatter = (targetDate) => {
  var date = new Date(targetDate);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var date = date.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  var strDate = year + "/" + month + "/" + date;
  return strDate;
};

export const SnackbarOpen = (message) => {
  return {open:true, message: message};
}

export const SnackbarClase = () => {
  return {open:false}  
}