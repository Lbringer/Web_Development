function convertToRoman(num) {
    let count = 0;
    let breakDown = [];
    while (num > 0) {
        // breakDown.push((num % 10) * (Math.pow(10, count)));
        breakDown.push(num % 10);
        num = Math.floor(num / 10);
        count++;
    }
    console.log(breakDown);
    let result = [];
    for (let i = 0; i < breakDown.length; i++) {
        result.push(convertBreak(breakDown, i));
    }
    result.reverse();
    return result.join("");
}
let roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
}
function convertBreak(arr, i) {
    if (arr[i] < 4) {
        let res = "";
        for (let j = 1; j <= arr[i]; j++) {
            res = res + roman[Math.pow(10, i)];
        }
        return res;
    }
    else if (arr[i] === 4) {
        let res = `${roman[Math.pow(10, i)]}${roman[5 * Math.pow(10, i)]}`;
        return res;
    }
    else if (arr[i] === 9) {
        let res = `${roman[Math.pow(10, i)]}${roman[Math.pow(10, i + 1)]}`;
        return res;
    }
    else {
        let res = `${roman[5 * Math.pow(10, i)]}`
        let temp = arr[i] - 5;
        for (let j = 1; j <= temp; j++) {
            res = res + roman[Math.pow(10, i)];
        }
        return res;
    }
}

console.log(convertToRoman(9));