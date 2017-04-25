// 共通関数クラス

// 9 --> '09'
export const ZeroFill = (targetInt) => {
  let filledStr = targetInt;
  if (filledStr < 10) {
    filledStr = `0${filledStr}`;
  }
  return `${filledStr}`;
};

// CurrentTime → string(yyyy/MM/dd)
export const GetCurrentTimeString = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = ZeroFill(month);
  day = ZeroFill(day);

  const strDate = `${year}/${month}/${day}`;
  return strDate;
};

// CurrentTime → string(yyyyMM)
export const GetCurrentTimeStringYYYYMM = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;

  month = ZeroFill(month);

  const yyyymm = `${year}${month}`;
  return yyyymm;
};

// date → string(yyyy/MM/dd)
export const DateToStringYYYYMMDD = (targetDate) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = ZeroFill(month);
  day = ZeroFill(day);

  const strDate = `${year}/${month}/${day}`;
  return strDate;
};

// date → string(MM/dd)
export const DateToStringMMDD = (targetDate) => {
  const date = new Date(targetDate);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = ZeroFill(month);
  day = ZeroFill(day);

  const strDate = `${month}/${day}`;
  return strDate;
};

// yyyyMM --> 'yyyy/MM'
export const SpliceSlashYYYYMM = (targetString) => {
  const year = targetString.substr(0, 4);
  const month = targetString.substr(4, 2);
  const strDate = `${year}/${month}`;
  return strDate;
};

export const GenerateKey = (empId) => {
  let id = 1000;
  if (empId) id = empId;
  return new Date().getTime().toString(16) + Math.floor(id * Math.random()).toString(16);
};

// 1930 --> 1950
// 2130 --> 2050
const ConvertTnesPlace = (num) => {
  const numStr = num.toString();
  const tensNum = +numStr.substring(numStr.length - 2, numStr.length - 1);
  if (tensNum === 3) {
    return (+num + 20) / 100;
  }
  return (+num / 100);
};

export const CalcOvertimeHrs = (startTime, endTime) => {
  const diffHrs = ConvertTnesPlace(endTime) - ConvertTnesPlace(startTime);
  if (diffHrs < 0) return 0;

  let breakTime = 0;
  if (diffHrs >= 1.5) breakTime += 0.5;
  if (diffHrs >= 8) breakTime += 0.5;

  return diffHrs - breakTime;
};
