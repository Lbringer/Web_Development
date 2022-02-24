function telephoneCheck(str) {
    let boldb = true;
    let boldss = true;
    let boldd = true;
    let bolds = true;
    let arr = str.split("");
    let regex = /[0-9]/;
    if (arr[0] === "(") {
        switch (arr.length) {
            case 13: {
                return arr.every((val, index) => {
                    if (index === 0 && val === "(") {
                        return true;
                    }
                    else if (index === 4 && val === ")") {
                        return true;
                    }
                    else if (index === 8 && val === "-") {
                        return true;
                    }
                    else if (regex.test(val) && index !== 0 && index !== 4 && index != 8) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            case 14: {
                return arr.every((val, index) => {
                    if (index === 0 && val === "(") {
                        return true;
                    }
                    else if (index === 4 && val === ")") {
                        return true;
                    }
                    else if (index === 5 && val === " ") {
                        return true;
                    }
                    else if (index === 9 && val === "-") {
                        return true;
                    }
                    else if (regex.test(val) && index !== 0 && index !== 4 && index !== 5 && index !== 9) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            default: {
                return false;
            }
        }
    }
    else if (regex.test(arr[0])) {
        switch (arr.length) {
            case 10: {
                return arr.every((val) => {
                    return regex.test(val);
                })
            }
            case 12: {
                return arr.every((val, index) => {
                    if (val === "-" && boldd === true) {
                        if (index === 7 || index === 3) {
                            bolds = false;
                            return true;
                        }
                    }
                    else if (val === " " && bolds === true) {
                        if (index === 7 || index === 3) {
                            boldd = false;
                            return true;
                        }
                    }
                    else if (regex.test(val) && index !== 7 && index !== 3) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            case 14: {
                return arr.every((val, index) => {
                    if (val === "1" && index === 0) {
                        return true;
                    }
                    else if (val === " " && bolds === true && index === 1) {
                        boldb = false;
                        return true;
                    }
                    else if (val === "(" && index === 1) {
                        return true;
                    }
                    else if (index === 5 && val === ")" && boldb === true) {
                        boldss = false;
                        return true;
                    }
                    else if (val === "-" && index === 9) {
                        return true;
                    }
                    else if (val === "-" && boldd === true) {
                        if (index === 5 || index === 9) {
                            bolds = false;
                            return true;
                        }
                    }
                    else if (val === " " && bolds === true) {
                        if (index === 5 || index === 9) {
                            boldd = false;
                            return true;
                        }
                    }
                    else if (regex.test(val) && index !== 5 && index !== 9 && index !== 1 && index !== 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            case 16: {
                return arr.every((val, index) => {
                    if (val === "1" && index === 0) {
                        return true;
                    }
                    else if (val === " " && index === 1) {
                        return true;
                    }
                    else if (val === "-" && index === 11) {
                        return true;
                    }
                    if (index === 2 && val === "(") {
                        return true;
                    }
                    else if (index === 6 && val === ")") {
                        return true;
                    }
                    else if (val === " " && index === 7) {
                        return true;
                    }
                    else if (regex.test(val) && index !== 0 && index !== 1 && index !== 11 && index !== 7 && index !== 6
                        && index !== 7 && index !== 2) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
            }
            default: {
                return false;
            }
        }
    }
    else {
        return false;
    }
}

console.log(telephoneCheck("1 555)555-5555"));