/* 
Written by: Abdul Salam
Position: Full stack Developer
Test Interview MCPayment
*/

// #1. find number that greater than -1
// simplest way (find max element and return it, it should be element that >= 0)
const findElemOfSubstract = (nums: number[]) => {
    const sort = nums.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    const res: number[] = [sort[0]];

    // if an element has any duplicate
    sort.filter((v, i) => {
        return nums[i + 1] === res[0] ? res.push(nums[i + 1]) : false;
    });

    return res;
}

const nums1 = [3, 1, 4, 2];
const nums2 = [10, -12, -15, 10];
console.log(findElemOfSubstract(nums1));
console.log(findElemOfSubstract(nums2));

// ================================================================
// #2. find number that the result of divided not equals with x
const findElemThatNotEqualsWithX = (nums: number[], x: number) => {
    const res: number[] = [];

    for (const i in nums) {
        // set flag
        let status = true;

        for (const j in nums) {
            // skip check the same position of array
            if (i === j) continue;
            // equals with x, exit loop and change status flag
            if ((+nums[i] / +nums[j]) === x) {
                status = false;
                break;
            }
        }

        status ? res.push(nums[i]) : false;
    }

    return res;
}

const nums3 = [1, 2, 3, 4];
const nums4 = [1, 24, 2, 8];
console.log(findElemThatNotEqualsWithX(nums3, 4));
console.log(findElemThatNotEqualsWithX(nums4, 12));

// ================================================================
// #3. find word that match with length
const findWordThatMatchLengthOfX = (words: string, x: number) => {
    const _words: string[] = words.split(' ');
    // filter and find with the exact length
    return _words.filter(m => m.length === x);
}

const words = 'souvenir loud four lost';
console.log(findWordThatMatchLengthOfX(words, 4));
console.log(findWordThatMatchLengthOfX(words, 8));