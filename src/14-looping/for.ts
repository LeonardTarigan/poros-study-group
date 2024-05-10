const nums = [30, 40, 50, 60, 70];

for (let i = 0; i < nums.length; i++) {
  console.log(`For loop ${i}: ${nums[i]}`);
}

for (const num of nums) {
  console.log(`Array item: ${num}`);
}

for (const index in nums) {
  console.log(`For loop ${index}: ${nums[index]}`);
}

nums.forEach((num, index) => console.log(`For loop ${index}: ${num}`));
