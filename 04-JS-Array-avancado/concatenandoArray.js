const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
// Juntar os dois arrays
const nums3 = nums1.concat(nums2);
console.log(nums3);
// Podemos juntar e adicionar mais valores
const nums4 = [10, 20, 30];
const nums5 = nums3.concat(nums4, ["teste", 24, 10], "Ola");
console.log(nums5);
//
// =================================
//
// Podemos fazer a cópia tambem com rest/spread
const nums6 = [...nums1, ...nums2, ...nums3, ...nums4, ...nums5];
console.log(nums6);
