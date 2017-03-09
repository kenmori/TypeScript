var Calculator = (function () {
    function Calculator(calcStr, func) {
        this.calcStr = calcStr;
        this.calc = func;
    }
    Calculator.prototype.doCalc = function (a, b) {
        return a + " \u3068 " + b + "\u306E" + this.calcStr + ": " + this.calc(a, b);
    };
    return Calculator;
}());
var calculatorAdd = new Calculator('足し算', function (a, b) { return a + b; });
var calculatorSub = new Calculator('引き算', function (a, b) { return a - b; });
var br = "<br>";
document.body.innerHTML = calculatorAdd.doCalc(2, 3) + br + calculatorSub.doCalc(9, 7);
