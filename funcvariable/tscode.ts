//変数に関数を代入
let calc = function(numA: number, numB: number) :number{
    return numA + numB;
};
let numA = 3.5;
let numB = 2;

//変数に関数を代入しておくと別の関数に変更できる
if(numA > numB){
    calc = function(a:number, b:number) :number{
       return a - b;
    };
}


//実装が変わっている
document.body.innerHTML = calc(numA, numB).toString();