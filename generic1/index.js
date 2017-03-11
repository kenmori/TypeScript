//冗長な書き方
var someStringArray;
someStringArray = new Array();
//「文字列の配列だが要素はまだない」の意味
var someStringArray2 = new Array();
//要素のデータ型指定がジェネリック。(Array要素はどんな型でもいいが、型の指定は決めなければいけない。そしてstringと決めた)
//「要素の型はジェネリックなので具体的な型を指定してください」
for (var i = 1; i < 6; i++) {
    someStringArray2.push(i + "\u6708");
}
document.body.innerHTML = someStringArray2.toString();
