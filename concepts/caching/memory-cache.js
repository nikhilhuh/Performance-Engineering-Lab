// Simple in-memory key-value cache

class MemoryCache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  has(key) {
    return Object.prototype.hasOwnProperty.call(this.cache, key);
  }

  clear() {
    this.cache = {};
  }
}

module.exports = MemoryCache;
