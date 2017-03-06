interface TypeScriptElement {
    element : HTMLElement
}

let bodyElement : TypeScriptElement = {
    element : document.body
}

bodyElement.element.innerHTML = "HTMLElementのデータ型を隠している。こうすることでライブラリを知らなくてもTypeScriptだけ知っていれば使えるようになる";


