function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                count += countProperties(obj[key]);
            }
        }
    }
    return count;
}

const input = { a: 1, b: { c: 2, d: 3 }, e: 4 };
console.log(countProperties(input));