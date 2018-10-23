function showMember(username, realname) {
    var showStr = username;
    if (realname) {
        showStr += "(\u672C\u540D: " + realname + ")";
    }
    return showStr + "さん";
}
var cheetah = showMember("猫");
var ken = showMember("スージー", "森田");
var br = "<br>";
document.body.innerHTML = cheetah + br + ken;
