
//通常のJSでのDOM操作
// let buttonelm = document.createElement('button');
// var buttonText = document.createTextNode('押してください');
// buttonelm.appendChild(buttonText);
// buttonelm.onclick = function(event){
//     console.log("onClick")
// }


//TSのDOM操作
class ButtonDOM {
    elem: HTMLElement;
    constructor(labelText:string){
        this.elem = document.createElement("button");
        this.elem.appendChild(document.createTextNode(labelText));
        this.elem.onclick = function(){console.log("typeScriptButton")}
    }
}

document.body.appendChild(new ButtonDOM("button").elem);
