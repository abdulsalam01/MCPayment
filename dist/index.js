"use strict";
var findElemOfSubstract = function (nums) {
    var sort = nums.sort(function (a, b) { return a < b ? 1 : a > b ? -1 : 0; });
    var res = [sort[0]];
    sort.filter(function (v, i) {
        return nums[i + 1] === res[0] ? res.push(nums[i + 1]) : false;
    });
    return res;
};
var nums1 = [3, 1, 4, 2];
var nums2 = [10, -12, -15, 10];
console.log(findElemOfSubstract(nums1));
console.log(findElemOfSubstract(nums2));
var findElemThatNotEqualsWithX = function (nums, x) {
    var res = [];
    for (var i in nums) {
        var status_1 = true;
        for (var j in nums) {
            if (i === j)
                continue;
            if ((+nums[i] / +nums[j]) === x) {
                status_1 = false;
                break;
            }
        }
        status_1 ? res.push(nums[i]) : false;
    }
    return res;
};
var nums3 = [1, 2, 3, 4];
var nums4 = [1, 24, 2, 8];
console.log(findElemThatNotEqualsWithX(nums3, 4));
console.log(findElemThatNotEqualsWithX(nums4, 12));
var findWordThatMatchLengthOfX = function (words, x) {
    var _words = words.split(' ');
    return _words.filter(function (m) { return m.length === x; });
};
var words = 'souvenir loud four lost';
console.log(findWordThatMatchLengthOfX(words, 4));
console.log(findWordThatMatchLengthOfX(words, 8));
