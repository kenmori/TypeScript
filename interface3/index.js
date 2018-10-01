//数字5を文字として表す時と数字として表す時を厳密に区別できるようにしたinterface
var five = {
    string: "5",
    number: 5
};
var six = {
    string: "6",
    number: 6
};
var comma = ", ";
document.body.innerHTML = five.string + six.string + comma + (five.number + six.number);
