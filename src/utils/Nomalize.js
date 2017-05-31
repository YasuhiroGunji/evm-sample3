export const Time = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 2)}:${onlyNums.slice(2)}`;
};

export const MaxLength = max =>
  value => value.length > max ? value.slice(0, 3) : value;
