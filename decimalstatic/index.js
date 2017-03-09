var DecimalMultipler = (function () {
    function DecimalMultipler() {
    }
    DecimalMultipler.showMultiplyDecimal = function (numA, numB, dp) {
        return numA + "\u3068" + numB + "\u3092\u639B\u3051\u308B\u3068" + (numA * numB).toFixed(dp);
    };
    return DecimalMultipler;
}());
var numA = 3.5;
var numB = 2;
var dp = 1;
document.body.innerHTML = DecimalMultipler.showMultiplyDecimal(numA, numB, dp);
