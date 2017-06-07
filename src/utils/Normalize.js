export const Time = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  const hour = onlyNums.substr(0, 2);
  let min = onlyNums.substr(2, 2);

  if (!(min === '0' || min === '3' || min === '30')) {
    min = '00';
  }

  return `${hour}:${min}`;
};

export const Hrs = (value) => {
  if (!value) {
    return value;
  }
  return value.toFixed(1);
};
