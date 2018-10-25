var kenji = { username: "けんもり" };
var morita = { username: "もりけん", realname: "森田賢二" };
function showMember(member) {
    var showStr = member.username;
    if (member.realname) {
        showStr += "(\u672C\u540D: " + member.realname + ")";
    }
    return showStr + "さん";
}
var br = "<br>";
document.body.innerHTML = showMember(kenji) + br + showMember(morita);
