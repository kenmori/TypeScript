
class ElementDOM {
    elem: HTMLElement;
    constructor(tagName:string){
        this.elem = document.createElement(tagName);
    }
    addText(text: string) {
        this.elem.appendChild(document.createTextNode(text));
    }
    addToBody(){
        document.body.appendChild(this.elem);
    }
}

class DivElem extends ElementDOM {
    constructor(textStr?: string){
        super("div");
        if(textStr){
            this.addText(textStr);
        };
    }
}

class ButtonDOM extends ElementDOM {
    constructor(labelStr: string){
        super("button");
        this.addText(labelStr);
    }
    onClickShowSomething(showStr: string){
        this.elem.onclick = function(){
            new DivElem(showStr).addToBody();
        }
    }
}

let bdom = new ButtonDOM("click me")
bdom.onClickShowSomething("div is here");
bdom.addToBody();
