var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return this.name += "ワン";
    };
    return Dog;
}());
var shiro = new Dog("白太郎");
document.body.innerHTML = shiro.sayHello();
