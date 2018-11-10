var VgShopGod = (function () {
    function VgShopGod(good, cost) {
        this.good = good;
        this.cost = cost;
    }
    return VgShopGod;
}());
var FieldVg = (function () {
    function FieldVg() {
    }
    FieldVg.createVg = function (name, value) {
        var vg = new FieldVg();
        vg.name = name;
        vg.value = value;
        return vg;
    };
    return FieldVg;
}());
//3つのデータ型を包含するクラス
var MyVg = (function () {
    function MyVg(vg, name, price) {
        this.vg = vg;
        this.name = name;
        this.price = price;
    }
    return MyVg;
}());
//ジェネリックなクラスのオブジェクト
var yaoyaCarrot = { item: "人参", price: 120 };
var shopDaikon = new VgShopGod("大根", 90);
var fieldCabbage = FieldVg.createVg("キャベツ", 100);
//3つのデータ型を1つの関数で処理(汎用的な関数)
var makeMyVg = function (vg) {
    //特定のデータ型を取り出せるかチェックする
    if (vg.item && vg.price) {
        return new MyVg(vg, vg.item, vg.price);
    }
    else if (vg instanceof VgShopGod) {
        return new MyVg(vg, vg.good, vg.cost);
    }
    else if (vg instanceof FieldVg) {
        return new MyVg(vg, vg.name, vg.value);
    }
    else {
        return null;
    }
};
var vgcart = [yaoyaCarrot, shopDaikon, fieldCabbage, "fafa"];
var br = "<br>";
var resultStr = "";
var mySum = 0;
for (var _i = 0, vgcart_1 = vgcart; _i < vgcart_1.length; _i++) {
    var vg = vgcart_1[_i];
    if (makeMyVg(vg)) {
        var myvg = makeMyVg(vg);
        resultStr += (myvg.name + "\u306F" + myvg.price + "\u5186") + br;
        mySum += myvg.price;
    }
    else {
        resultStr += "変なものが入っています" + br;
    }
}
resultStr += "\u5408\u8A08" + mySum + "\u5186\u3067\u3057\u305F";
document.body.innerHTML = resultStr;
