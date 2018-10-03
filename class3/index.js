var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NormalMember = (function () {
    function NormalMember(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    NormalMember.prototype.getMemberFullName = function () {
        return this.firstName + this.lastName + "さん";
    };
    return NormalMember;
}());
var PremiumMember = (function (_super) {
    __extends(PremiumMember, _super);
    function PremiumMember() {
        _super.apply(this, arguments);
    }
    PremiumMember.prototype.getMemberFullName = function () {
        return _super.prototype.getMemberFullName.call(this) + "どうも";
    };
    return PremiumMember;
}(NormalMember));
var member = new PremiumMember('kenjifa', 'moritafafa', 37);
var m = member.getMemberFullName();
document.body.innerHTML = m;
