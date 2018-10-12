class DecimalMultipler {
    showMultiplyDecimal(numA: number, numB: number, dp:number) :string {
        return `${numA}と${numB}を掛けると${(numA* numB).toFixed(dp)}`;
    }
}

let numA = 3.5;
let numB = 2;
let dp = 1;


document.body.innerHTML = new DecimalMultipler().showMultiplyDecimal(numA, numB, dp);