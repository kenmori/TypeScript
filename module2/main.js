var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./domclass"], function (require, exports, domclass_1) {
    "use strict";
    var ButtonDOM = (function (_super) {
        __extends(ButtonDOM, _super);
        function ButtonDOM(labelStr) {
            _super.call(this, "button");
            this.addText(labelStr);
        }
        ButtonDOM.prototype.onClickShowSomething = function (showStr) {
            this.elem.onclick = function () {
                new domclass_1.DivElem(showStr).addToBody();
            };
        };
        return ButtonDOM;
    }(domclass_1.ElementDOM));
    var bdom = new ButtonDOM("click me");
    bdom.onClickShowSomething("div is here");
    bdom.addToBody();
});
