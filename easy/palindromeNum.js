/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Input: 
Output: true or false
Explanation: 121 reads as 121 from left to right and from right to left.
*/


var isPalindrome = function(x) {

    // Could you solve it without converting the integer to a string?
    if(typeof x == 'number'){
        console.log(`x is a number`)
        if (x < 0) return false;
        let reverseValue = 0;
        for (let i = x; i>= 1; i = Math.floor(i/10)){
            reverseValue = reverseValue * 10 + i%10
        }
        console.log(reverseValue)
        return reverseValue === x;
        
    }else{
        console.log(`x is not a number`)
        const y = x.split('').reverse().join('')
        if(x === y){
            console.log(`x is a palindrome word`)
            return true
        }else{
            console.log(`x is not a palindrome word`)
            return false
        }
    
    }
};

x = 12345
isPalindrome(x)



