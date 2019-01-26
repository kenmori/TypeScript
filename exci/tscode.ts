


class DOMElement {
    el: HTMLElement;
   constructor(elem: string){
        this.el = document.createElement(elem);
   }
   addText(text: string){
      this.el.appendChild(document.createTextNode(text));
   }
   append(node: HTMLElement){
       this.el.appendChild(node);
   }
   addToBody(){
       document.body.appendChild(this.el);
   }
}


class DivElement extends DOMElement {
    constructor(el: string){
        super(el);
    }
}


var ins = new DivElement("div");
ins.addText("fafa");
ins.addToBody();

