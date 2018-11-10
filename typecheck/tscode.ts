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

//3つのデータ型を1つの関数で処理(汎用的な関数)
let makeMyVg = function(vg: any):MyVg<any>{//nullが戻ることもありうる
    //特定のデータ型を取り出せるかチェックする
    if(<YaoyaItem>vg.item && <YaoyaItem>vg.price){//classではないのでinstanceofが使えない。特定のデータ型が取り出せるかのチェック。「強制型変換」データ型が違っても、値が取り出せなくてもnull
        return new MyVg<YaoyaItem>(vg, vg.item, vg.price);
    } else if (vg instanceof VgShopGod) {
        return new MyVg<VgShopGod>(vg, vg.good, vg.cost);
    } else if (vg instanceof FieldVg) {
        return new MyVg<VgShopGod>(vg, vg.name, vg.value);
    } else {
        return null;
    }
}

let vgcart = [yaoyaCarrot, shopDaikon, fieldCabbage, "fafa"];


const br = "<br>";
let resultStr = "";
let mySum = 0;

for (let vg of vgcart){
    if(makeMyVg(vg)){//nullチェック
        let myvg = makeMyVg(vg);
        resultStr += `${myvg.name}は${myvg.price}円` + br;
        mySum += myvg.price;
    } else {
        resultStr += "変なものが入っています" + br;
    }

}
resultStr += `合計${mySum}円でした`;
document.body.innerHTML = resultStr;