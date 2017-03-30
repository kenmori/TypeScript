var Cat = (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.sayHello = function () {
        return this.name += "だニャン";
    };
    return Cat;
}());
var mike = new Cat("三毛");
document.body.innerHTML = mike.sayHello();
