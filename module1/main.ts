///<reference path ="domclass.ts"/>

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
