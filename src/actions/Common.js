
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';

// 9 --> '09'
export const ZeroFill = (targetInt) => {
  let filledStr = targetInt;
  if (filledStr < 10) {
    filledStr = `0${filledStr}`;
  }
  return `${filledStr}`;
};

export const DateFormatter = (targetDate) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = ZeroFill(month);
  day = ZeroFill(day);

  const strDate = `${year}/${month}/${day}`;
  return strDate;
};

export const DateFormatterMMdd = (targetDate) => {
  const date = new Date(targetDate);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = ZeroFill(month);
  day = ZeroFill(day);

  const strDate = `${month}/${day}`;
  return strDate;
};

// yyyyMM --> 'yyyy/MM'
export const StringFormatterSlashyyyyMM = (targetString) => {
  const year = targetString.substr(0, 4);
  const month = targetString.substr(4, 2);
  const strDate = `${year}/${month}`;
  return strDate;
};

export const SnackbarOpen = message => ({ open: true, message });

export const SnackbarClase = () => ({ open: false });

export const CreateKey = (empId, item) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    day = `0${day}`;
  }
  const key = `${empId}${year}${month}${day}`;
  return key;
};
