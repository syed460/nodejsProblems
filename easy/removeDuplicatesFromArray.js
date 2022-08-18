// RemoveDuplicatesFromShortedArray

let nums = [0,0,1,1,1,2,2,3,3,4,0]
let nums1 = [1, 1, 2]
// output 5, nums = [1, 2, 3, 4, _, _, _, _, _]


function arrangeUniqValues(nums){
    let k = 0

    // console.log(nums)
    for (let i = 1; i < nums.length; i++){
        if(nums[k] !== nums[i]){
            k = k+1
            nums[k] = nums[i]
        }
    }
    k=k+1
    console.log(k, nums)
    return k, nums

}

arrangeUniqValues(nums)