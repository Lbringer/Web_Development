function rot13(str) {
    let regex = /[A-Z]/;
    let arr = str.split("");
    console.log(arr);
    return result = arr.map((let) => {
        return regex.test(let) ? key[let] : let;
    }).join("");
}
let key = {
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M",
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z"
}
console.log(rot13("SERR PBQR PNZC"));
