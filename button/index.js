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
