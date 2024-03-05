//Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const twoSum = (nums, target) => {
  let map = {};
  for (let [count, num] of nums.entries()) {
    //this check determines that we have already found the other half in the map
    //i.e. if element '2' was there then we have already stored '7' in the map
    //hence, we pass the index while iterating the array for which we found the element
    //and the map element which contains the complementary number for array index element
    if (map[num] !== undefined) {
      return [map[num], count];
    } else {
      map[target - num] = count; //store the 'index' of the 'other half' in the map
    }
  }
};

console.log(twoSum([4, 2, 11, 7, 15], 9));
