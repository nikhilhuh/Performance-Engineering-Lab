// utils/throttle.js
export default function throttle(fn, wait, onThrottle) {
  let last = 0;
  let throttling = false;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      throttling = false;
      fn.apply(this, args);
    } else {
      if (!throttling && typeof onThrottle === 'function') {
        onThrottle();
        throttling = true;
      }
    }
  };
}
