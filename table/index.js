var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ElementDOM = (function () {
    function ElementDOM(tagName) {
        this.elem = document.createElement(tagName);
    }
    ElementDOM.prototype.addText = function (text) {
        this.elem.appendChild(document.createTextNode(text));
    };
    ElementDOM.prototype.addChild = function (elemDOM) {
        this.elem.appendChild(elemDOM.elem);
    };
    ElementDOM.prototype.addToBody = function () {
        document.body.appendChild(this.elem);
    };
    return ElementDOM;
}());
var TableRowDOM = (function (_super) {
    __extends(TableRowDOM, _super);
    function TableRowDOM() {
        _super.call(this, "tr");
    }
    TableRowDOM.createFromArray = function (array) {
        var theRow = new TableRowDOM();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var cellval = array_1[_i];
            theRow.addCol(cellval);
        }
        return theRow;
    };
    TableRowDOM.prototype.addCol = function (content) {
        var td = new ElementDOM("td");
        td.addText(content);
        this.addChild(td);
    };
    return TableRowDOM;
}(ElementDOM));
var DivElem = (function (_super) {
    __extends(DivElem, _super);
    function DivElem(textStr) {
        _super.call(this, "div");
        if (textStr) {
            this.addText(textStr);
        }
        ;
    }
    return DivElem;
}(ElementDOM));
var TableDOM = (function (_super) {
    __extends(TableDOM, _super);
    function TableDOM() {
        _super.call(this, "table");
    }
    TableDOM.prototype.addTableRow = function (row) {
        this.addChild(row);
    };
    return TableDOM;
}(ElementDOM));
var ButtonDOM = (function (_super) {
    __extends(ButtonDOM, _super);
    function ButtonDOM(labelStr) {
        _super.call(this, "button");
        this.addText(labelStr);
    }
    ButtonDOM.prototype.onClickShowSomething = function (showStr) {
        this.elem.onclick = function () {
            new DivElem(showStr).addToBody();
        };
    };
    return ButtonDOM;
}(ElementDOM));
var birdTableData = [
    ["スズメ", "チュンチュン", "穀物"],
    ["ツバメ", "チュピチュピ", "虫"],
    ["ニワトリ", "コケコッコー", "朝"],
    ["メジロ", "チー", "花蜜"]
];
var birdTable = new TableDOM();
for (var _i = 0, birdTableData_1 = birdTableData; _i < birdTableData_1.length; _i++) {
    var row = birdTableData_1[_i];
    birdTable.addTableRow(TableRowDOM.createFromArray(row));
}
birdTable.addToBody();
var bdom = new ButtonDOM("click me");
bdom.onClickShowSomething("div is here");
bdom.addToBody();
