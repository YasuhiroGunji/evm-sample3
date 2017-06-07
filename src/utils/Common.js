// 共通関数クラス

// 9 --> '09'
export const ZeroFill = targetInt => `0${targetInt}`.slice(-2);

// CurrentTime → string(yyyy/MM/dd)
export const GetCurrentTimeString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ZeroFill(date.getMonth() + 1);
  const day = ZeroFill(date.getDate());

  return `${year}/${month}/${day}`;
};

// CurrentTime → string(yyyyMM)
export const GetCurrentTimeStringYYYYMM = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ZeroFill(date.getMonth() + 1);

  return `${year}${month}`;
};

// date → string(yyyy/MM/dd)
export const DateToStringYYYYMMDD = (targetDate) => {
  const date = new Date(targetDate);
  const year = date.getFullYear();
  const month = ZeroFill(date.getMonth() + 1);
  const day = ZeroFill(date.getDate());

  return `${year}/${month}/${day}`;
};

// date → string(MM/dd)
export const DateToStringMMDD = (targetDate) => {
  const date = new Date(targetDate);
  const month = ZeroFill(date.getMonth() + 1);
  const day = ZeroFill(date.getDate());

  return `${month}/${day}`;
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


// "18:00" --> "1800"
// "21:30" --> "2030"
const RemoveTimeColon = (str) => {
  if (str.indexOf(':') === -1) {
    return `${str}0000`.slice(4);
  }

  return str.replace(/:/g, '');
};

// 1800 --> 1800
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
  const start = RemoveTimeColon(startTime);
  const end = RemoveTimeColon(endTime);
  const diffHrs = ConvertTnesPlace(end) - ConvertTnesPlace(start);
  if (diffHrs < 0) return 0;

  let breakTime = 0;
  if (diffHrs >= 1.5) breakTime += 0.5;
  if (diffHrs >= 8) breakTime += 0.5;

  return diffHrs - breakTime;
};
