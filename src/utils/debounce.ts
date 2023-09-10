export const debounce = (callback: () => void) => {
  let val: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(val);
    val = setTimeout(() => {
      callback();
    }, 500);
  };
};
