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
    ElementDOM.prototype.addToBody = function () {
        document.body.appendChild(this.elem);
    };
    return ElementDOM;
}());
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
///<reference path ="domclass.ts"/>
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
var bdom = new ButtonDOM("click me");
bdom.onClickShowSomething("div is here");
bdom.addToBody();
