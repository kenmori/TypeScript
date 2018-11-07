//冗長な書き方
let someStringArray: string[];
someStringArray = new Array();

//「文字列の配列だが要素はまだない」の意味
let someStringArray2 = new Array<string>();

//要素のデータ型指定がジェネリック。(Array要素はどんな型でもいいが、型の指定は決めなければいけない。そしてstringと決めた)
//「要素の型はジェネリックなので具体的な型を指定してください」

for (let i = 1; i<6; i++){
    someStringArray2.push(`${i}月`);
}
document.body.innerHTML = someStringArray2.toString();