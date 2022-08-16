// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */


// var twoSum = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) { // n
//         let firstLoop = nums[i]

//         for (let x = 0; x < nums.length; x++) { // n2
//             let secondLoop = nums[x]
//             if (firstLoop + secondLoop === target && i !== x) {
//                 console.log(i, x)
//                 console.log(firstLoop, secondLoop)
//                 return [i, x]

//             }
//         }
//     }

// }
// own solution
// above solution time Complacity = O(n2) due to it has 2 forloop
// and slower when the array gets increasing 

// Best solution found

var twoSum = function (nums, target) {
    let previousValues = {}
    for (let i = 0; i < nums.length; i++) { //n
        console.log(i)
        console.log(previousValues)
        let currentValue = nums[i]
        let valueNeeded = target - currentValue
        let index1 = previousValues[valueNeeded]

        if (index1 !== null && index1 !== undefined) {
            console.log(index1, i)
            return [index1, i]
        } else {
            previousValues[currentValue] = i
        }
    }

};

let nums = [3, 2, 4]
let target = 6

twoSum(nums, target)

