function palindrome(str) {
    let regex = /[A-Za-z0-9]/
    let arr = str.split("");
    let filter = arr.filter((s) => {
        return regex.test(s);
    })
    filter = filter.map((string) => {
        return string.toLowerCase();
    })
    console.log(filter);
    let copy = [...filter];
    copy.reverse();
    console.log(copy);
    return copy.every((num, index) => num === filter[index]);

}

console.log(palindrome("1 eye for of 1 eye."));