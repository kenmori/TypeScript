//「この変数は今はまだ空だが関数型」という意味
let calc: (a: number, b: number) => number;
let numA = 3;
let numB = 3;

if(numA > numB){
    calc = function(a:number, b:number){
       return a - b;
    };
} else if(numA < numB) {
    calc = function(a:number, b:number){
        return a + b;
    };
} else {
   calc = function (a: number, b: number){
       return a * b;
   };
}
document.body.innerHTML = calc(numA, numB).toString();