//数字5を文字として表す時と数字として表す時を厳密に区別できるようにしたinterface

interface NumberString {
    string: string;
    number: number;
}
let five: NumberString = {
    string: "5",
    number: 5
}
let six: NumberString = {
    string: "6",
    number: 6
}
const comma = ", ";
document.body.innerHTML = five.string + six.string + comma + (five.number + six.number);

