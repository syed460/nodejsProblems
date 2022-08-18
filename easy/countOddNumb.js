// odd numbers are 1, 3, 5, 7, 9
// even numbers are 2, 4, 6, 8, 10
//console.log(2%2) // even numbers produce 0 

/*
function oddNumber(low, high){ // this is not going to work for large numbers like 2890, 443925


    let rangeNumbers = [...Array(high-low+1).keys()].map((i) => {
        return i+low
    })
    console.log(rangeNumbers)


    let oddNumbers = [];
    for (const index of rangeNumbers){
        console.log(index%2)
        if (index%2 === 1){
            oddNumbers.push(index)
        }
    }
    console.log(oddNumbers.length)
    return oddNumbers.length
}
*/

// function oddNumber(){ // with foreach(callback)
//     let rangeNumbers = [...Array(high-low+1).keys()].map((i) => {
//         return i+low
//     })
//     console.log(rangeNumbers)


//     let oddNumbers = [];
//     rangeNumbers.forEach(item => {
//         if(item%2 === 1) oddNumbers.push(item)
//     })
//     console.log(oddNumbers.length)
//     return oddNumbers.length    
// }

function oddNumber(low, high) {
    if (low % 2 === 0) low = low + 1
    if (high % 2 === 0) high = high - 1
    // console.log(count)
    return ((high - low) / 2) + 1

}; // T = O(1), S = O(1)


let low = 10 // 2890
let high = 20 // 443925
oddNumber(low, high)



