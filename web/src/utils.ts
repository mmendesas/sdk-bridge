export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const addZero = (value: number) => {
  return String(value).padStart(2, '0');
};

export const getSeconds = (expires: number) => {
  const diff = expires - Date.now();
  return Math.ceil(diff / 1000);
};
