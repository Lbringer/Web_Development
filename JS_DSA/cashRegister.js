function checkCashRegister(price, cash, cid) {
    let tempChange = cash - price;
    console.log(tempChange);
    let money = cid.map((arr) => arr[1]);
    money.reverse();
    console.log(money);
    let totalMoney = money.reduce((sum, num) => sum + num, 0)
    totalMoney = parseFloat(totalMoney.toFixed(2));
    console.log(totalMoney);
    if (tempChange > totalMoney) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    else if (tempChange === totalMoney) {
        return { status: "CLOSED", change: cid }
    }
    else {
        let change = [];
        for (let i = 0; i < amount.length; i++) {
            let num = Math.floor(tempChange / amount[i])
            if (num !== 0) {
                let key = reverseObj[amount[i]];
                let val = num * amount[i];
                if (val > money[i]) {
                    change.push([key, money[i]]);
                    tempChange = tempChange - money[i];
                    tempChange = parseFloat(tempChange.toFixed(2));
                }
                else {
                    change.push([key, val]);
                    tempChange = tempChange - val;
                    tempChange = parseFloat(tempChange.toFixed(2));
                }

            }
        }
        console.log(change);
        console.log(tempChange);
        if (tempChange !== 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] }
        }
        return { status: "OPEN", change: change }
    }
}
let reverseObj = {
    0.01: "PENNY",
    0.05: "NICKEL",
    0.1: "DIME",
    0.25: "QUARTER",
    1: "ONE",
    5: "FIVE",
    10: "TEN",
    20: "TWENTY",
    100: "ONE HUNDRED",
};
let amount = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
