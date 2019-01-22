var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.ElementDOM = ElementDOM;
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
    exports.DivElem = DivElem;
});
