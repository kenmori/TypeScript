interface YaoyaItem {
    item: string;
    price: number;
}

class VgShopGod {
    good: string;
    cost: number;
    constructor(good: string, cost: number){
        this.good = good;
        this.cost = cost;
    }
}

class FieldVg {
    name:string;
    value: number;
    static createVg(name: string, value: number):FieldVg {
        let vg = new FieldVg();
        vg.name = name;
        vg.value = value;
        return vg;
    }
}


//3つのデータ型を包含するクラス

class MyVg<T>{
    vg: T;
    name: string;
    price: number;
    constructor(vg:T, name: string, price: number){
        this.vg = vg;
        this.name = name;
        this.price = price;
    }
}

//ジェネリックなクラスのオブジェクト
let yaoyaCarrot: YaoyaItem = {item: "人参", price: 120};
let shopDaikon = new VgShopGod("大根", 90);
let fieldCabbage = FieldVg.createVg("キャベツ", 100);


//MyVg<T>型のオブジェクトを作る関数
let buyFromYaoya = function(vg: YaoyaItem) : MyVg<YaoyaItem> {
    return new MyVg<YaoyaItem>(vg, vg.item, vg.price);
}

let buyFromShop = function(vg: VgShopGod): MyVg<VgShopGod> {
    return new MyVg<VgShopGod>(vg, vg.good, vg.cost);
}

let buyFieldVg = function(vg: FieldVg): MyVg<FieldVg> {
    return new MyVg<FieldVg>(vg, vg.name, vg.value);
}

//3つのデータ型でバラバラだった属性めいがクラス「MyVc」の同じ属性「name」と「price」の値に収まった。
//元のデータ型は属性vg(これがジェネリック型)に保存。元のデータ型を使いたい時は「MyVg.vg」の値を取り出せばいい

let vgcart: MyVg<any>[];
vgcart = [buyFromYaoya(yaoyaCarrot), buyFromShop(shopDaikon), buyFieldVg(fieldCabbage)];


const br = "<br>";
let resultStr = "";
let mySum = 0;

for (let vg of vgcart){
    resultStr += `${vg.name}は${vg.price}円${br}`;
    mySum += vg.price;
}
resultStr += `合計${mySum}円でした`;
document.body.innerHTML = resultStr;