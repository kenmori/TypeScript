class Cat {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    sayHello(){
        return this.name += "だニャン";
    }
}
let mike = new Cat("三毛");

document.body.innerHTML = mike.sayHello();