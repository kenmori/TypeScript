var MemberFactory = (function () {
    function MemberFactory() {
    }
    //MemberFactory自体に必要な属性値はないためconstructorはいらない
    MemberFactory.prototype.createMember = function (firstName, lastName, age) {
        //引数と戻り値のシグネチャ
        return { firstName: firstName, lastName: lastName, age: age }; //{Memberの属性: メソッドの引数}
    };
    return MemberFactory;
}());
var member = new MemberFactory();
var m = member.createMember('kenji', 'morita', 37);
document.body.innerHTML = m.lastName + m.firstName + 'は' + m.age + '歳です';
