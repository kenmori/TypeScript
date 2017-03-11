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
var yaoyaCarrot = { item: "人参", price: 120 };
var shopDaikon = new VgShopGod("大根", 90);
var fieldCabbage = FieldVg.createVg("キャベツ", 100);
var buyFromYaoya = function (vg) {
    return new MyVg(vg, vg.item, vg.price);
};
var buyFromShop = function (vg) {
    return new MyVg(vg, vg.good, vg.cost);
};
var buyFieldVg = function (vg) {
    return new MyVg(vg, vg.name, vg.value);
};
//anyとしていたgenericをユニオン型にする
var vgcart;
vgcart = [buyFromYaoya(yaoyaCarrot), buyFromShop(shopDaikon), buyFieldVg(fieldCabbage)];
var br = "<br>";
var resultStr = "";
var mySum = 0;
for (var _i = 0, vgcart_1 = vgcart; _i < vgcart_1.length; _i++) {
    var vg = vgcart_1[_i];
    resultStr += vg.name + "\u306F" + vg.price + "\u5186" + br;
    mySum += vg.price;
}
resultStr += "\u5408\u8A08" + mySum + "\u5186\u3067\u3057\u305F";
document.body.innerHTML = resultStr;
