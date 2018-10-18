class Calculator {
    calcStr: string;
    calc: (a:number, b: number) => number;
    constructor(calcStr: string, func: (a:number, b: number)=> number){
        this.calcStr = calcStr;
        this.calc = func;
    }
    doCalc(a: number, b: number) :string {
        return `${a} と ${b}の${this.calcStr}: ${this.calc(a, b)}` ;
    }
}

let calculatorAdd = new Calculator('足し算', function (a:number, b:number):number {return a+b});

let calculatorSub = new Calculator('引き算', function (a:number, b:number):number {return a-b});

const br = "<br>";

document.body.innerHTML = calculatorAdd.doCalc(2, 3) + br + calculatorSub.doCalc(9, 7);