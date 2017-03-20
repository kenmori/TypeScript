var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOMElement = (function () {
    function DOMElement(elem) {
        this.el = document.createElement(elem);
    }
    DOMElement.prototype.addText = function (text) {
        this.el.appendChild(document.createTextNode(text));
    };
    DOMElement.prototype.append = function (node) {
        this.el.appendChild(node);
    };
    DOMElement.prototype.addToBody = function () {
        document.body.appendChild(this.el);
    };
    return DOMElement;
}());
var DivElement = (function (_super) {
    __extends(DivElement, _super);
    function DivElement(el) {
        _super.call(this, el);
    }
    return DivElement;
}(DOMElement));
var ins = new DivElement("div");
ins.addText("fafa");
ins.addToBody();
