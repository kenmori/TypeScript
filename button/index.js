//通常のJSでのDOM操作
// let buttonelm = document.createElement('button');
// var buttonText = document.createTextNode('押してください');
// buttonelm.appendChild(buttonText);
// buttonelm.onclick = function(event){
//     console.log("onClick")
// }
//TSのDOM操作
var ButtonDOM = (function () {
    function ButtonDOM(labelText) {
        this.elem = document.createElement("button");
        this.elem.appendChild(document.createTextNode(labelText));
        this.elem.onclick = function () { console.log("typeScriptButton"); };
    }
    return ButtonDOM;
}());
document.body.appendChild(new ButtonDOM("button").elem);
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return this.name += "ワン";
    };
    return Dog;
}());
var shiro = new Dog("白太郎");
document.body.innerHTML = shiro.sayHello();
