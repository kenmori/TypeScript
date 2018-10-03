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
        return _super.prototype.getMemberFullName.call(this) + "様";
    };
    return PremiumMember;
}(NormalMember));
var MemberViewer = (function () {
    function MemberViewer() {
        this.memberArray = new Array();
    }
    MemberViewer.prototype.addMember = function (member) {
        this.memberArray.push(member);
    };
    MemberViewer.prototype.showMembers = function () {
        var showStr = "";
        var br = "<br/>";
        for (var _i = 0, _a = this.memberArray; _i < _a.length; _i++) {
            var member = _a[_i];
            showStr += member.getMemberFullName() + br;
        }
        return showStr.substr(0, showStr.length - br.length);
    };
    return MemberViewer;
}());
var viewer = new MemberViewer();
viewer.addMember(new PremiumMember('kenji', 'morita', 37));
viewer.addMember(new NormalMember('aaa', 'aaaa', 37));
var m = viewer.showMembers();
document.body.innerHTML = m;
