export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const addZero = (value: number) => {
  return String(value).padStart(2, '0');
};
