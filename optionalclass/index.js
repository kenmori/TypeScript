var UniversalMember = (function () {
    function UniversalMember() {
        this.username = "anonymous"; //属性を空にしないclass
        this.realname = "匿名";
    }
    UniversalMember.createMember = function (username, realname) {
        var member = new UniversalMember();
        if (username != null) {
            member.username = username;
        }
        if (realname != null) {
            member.realname = realname;
        }
        return member;
    };
    UniversalMember.prototype.showMember = function () {
        return this.username + " (\u672C\u540D) " + this.realname;
    };
    return UniversalMember;
}());
var kenji = UniversalMember.createMember("けんもり");
var morita = UniversalMember.createMember("もりけん", "森田賢二");
var br = "<br>";
document.body.innerHTML = kenji.showMember() + br + morita.showMember();
