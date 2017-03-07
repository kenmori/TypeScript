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
var member = new NormalMember('kenji', 'morita', 37);
var m = member.getMemberFullName();
document.body.innerHTML = m;
