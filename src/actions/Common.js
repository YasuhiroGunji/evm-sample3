
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';

export const DateFormatter = (targetDate) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0 + ${month}`;
  }
  if (date < 10) {
    day = `0 + ${day}`;
  }
  const strDate = `${year} + '/' + ${month} + '/' + ${day}`;
  return strDate;
};

export const SnackbarOpen = message => ({ open: true, message });

export const SnackbarClase = () => ({ open: false });
