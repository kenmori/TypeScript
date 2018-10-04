let numA = 3.5;
let numB = 2;


let resultStr:string;

function add (x: number, y: number): number{
    return x + y;
}
resultStr = `${numA}と${numB}を足すと${add(numA, numB)}`

document.body.innerHTML = resultStr;