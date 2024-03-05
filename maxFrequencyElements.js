/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = nums => {
  // [1,2,2,3,1,4,2]

  if (nums.length === 0) return 0;
  const map = new Map();
  map.set('maxFrequency', 1);
  map.set('maxCount', 0);
  let i = 0;

  while (i < nums.length) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    }

    let frequency = map.get(nums[i]);
    frequency = frequency + 1;
    map.set(nums[i], frequency);

    const maxFrequency = Math.max(map.get('maxFrequency'));

    if (maxFrequency === frequency) {
      map.set('maxCount', map.get('maxCount') + maxFrequency);
    } else if (frequency > maxFrequency) {
      map.set('maxCount', frequency);
      map.set('maxFrequency', frequency);
    }

    i++;
  }

  return map.get('maxCount');
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
console.log(maxFrequencyElements([19, 19, 19, 20, 19, 8, 19]));
