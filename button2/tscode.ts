

//ストリーム
class ButtonDOM {
    elem: HTMLElement;
    static create(): ButtonDOM {
        let button = new ButtonDOM();
        button.elem = document.createElement("button");
        return button;
    }
    addLabel(labelText:string):ButtonDOM {
        this.elem.appendChild(document.createTextNode(labelText));
        return this;
    }
    onClick(content: string): ButtonDOM{
        this.elem.onclick = function(){
            console.log(content);
        };
        return this;
    }
}

let Button = ButtonDOM.create().addLabel("ボタン").onClick("ストリーム");
document.body.appendChild(Button.elem);
