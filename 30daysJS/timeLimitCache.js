var TimeLimitedCache = function () {
  this.map = new Map();
  this.intervalCount = 0;
};

// TimeLimitedCache.prototype.printCount = function () {
//   console.log(`Interval Time:, ${this.intervalCount * 10}, ms`);
//   this.intervalCount++;
// };

// TimeLimitedCache.prototype.tenSecondInterval = function () {
//   this.printCount();
//   setInterval(() => this.printCount(), 10);
// };

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const found = this.map.has(key);

  if (found) clearTimeout(this.map.get(key).timeoutId);

  this.map.set(key, {
    value,
    timeoutId: setTimeout(() => this.map.delete(key), duration)
  });

  return found;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  return this.map.get(key).value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.map.size;
};

console.log('enter');
const timeLimitedCache = new TimeLimitedCache();
// timeLimitedCache.tenSecondInterval();
console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100)); // true
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); //-1
console.log(timeLimitedCache.count()); // 0
