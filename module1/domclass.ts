

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

