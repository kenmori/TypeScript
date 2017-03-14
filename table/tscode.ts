
class ElementDOM {
    elem: HTMLElement;
    constructor(tagName:string){
        this.elem = document.createElement(tagName);
    }
    addText(text: string) {
        this.elem.appendChild(document.createTextNode(text));
    }
    addChild(elemDOM: ElementDOM){
        this.elem.appendChild(elemDOM.elem);
    }
    addToBody(){
        document.body.appendChild(this.elem);
    }
}

class TableRowDOM extends ElementDOM {
    constructor(){
        super("tr");
    }
    static createFromArray (array: Array<string>):TableRowDOM {
        let theRow = new TableRowDOM();
        for(let cellval of array) {
            theRow.addCol(cellval);
        }
        return theRow;
    }
    addCol(content: string){
        let td = new ElementDOM("td");
        td.addText(content);
        this.addChild(td);
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

class TableDOM extends ElementDOM {
    constructor(){
        super("table");
    }
    addTableRow(row:TableDOM) {
        this.addChild(row);
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
let birdTableData = [
    ["スズメ", "チュンチュン", "穀物"],
    ["ツバメ", "チュピチュピ", "虫"],
    ["ニワトリ", "コケコッコー", "朝"],
    ["メジロ", "チー", "花蜜"]
]

let birdTable = new TableDOM();
for (let row of birdTableData) {
    birdTable.addTableRow(TableRowDOM.createFromArray(row));
}
birdTable.addToBody();


let bdom = new ButtonDOM("click me")
bdom.onClickShowSomething("div is here");
bdom.addToBody();
