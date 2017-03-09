//シグネチャが同じで内容が異なる関数を変数に代入すると関数の配列を作ることができる
let numA = 3;
let numB = 2;


let add = function (a: number, b: number) :number{
    return a + b;
};

let sub = function (a: number, b: number) :number{
    return a - b;
};

let multi = function (a: number, b: number) :number {
    return a * b;
};

let div = function (a: number, b: number) :number {
    return a / b;
};

const br = "<br>";
let resultStr = "";
let calcs = [add, sub, multi, div];

for (let calc of calcs) {
    resultStr += calc(numA, numB) + br;
}

document.body.innerHTML = resultStr;