//ストリーム
var ButtonDOM = (function () {
    function ButtonDOM() {
    }
    ButtonDOM.create = function () {
        var button = new ButtonDOM();
        button.elem = document.createElement("button");
        return button;
    };
    ButtonDOM.prototype.addLabel = function (labelText) {
        this.elem.appendChild(document.createTextNode(labelText));
        return this;
    };
    ButtonDOM.prototype.onClick = function (content) {
        this.elem.onclick = function () {
            console.log(content);
        };
        return this;
    };
    return ButtonDOM;
}());
var Button = ButtonDOM.create().addLabel("ボタン").onClick("ストリーム");
document.body.appendChild(Button.elem);
