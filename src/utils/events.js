export const optimize = (callback, time) => {
  const newTime = Math.floor(time / 3);
  return debounce(throttle(callback, newTime), newTime * 2);
};

export const throttle = (callback, time) => {
  let wait = false;
  return (...args) => {
    if (!wait) {
      callback.apply(this, args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, time);
    }
  };
};

export const debounce = (callback, time) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(context, args);
    }, time);
  };
};
