// 5. Filter Palindromic Words
// Given a list of words, use filter to create a new list containing only palindromic words (words that read the same backward and forward).
// Example:
// Input: ["madam", "racecar", "hello", "world"]
// Output: ["madam", "racecar"]
let arr = ["madam", "racecar", "hello", "world"];

let newarr = arr.filter((val) => {
    let flag = true;
    for (let i = 0; i < val.length / 2; i++) {
        if (val[i] !== val[val.length - 1 - i]) {
            flag = false;
            break;
        }
    }
    return flag;
});
console.log(newarr);



