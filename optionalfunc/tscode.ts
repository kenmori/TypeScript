function showMember(username: string, realname?:string) :string{
   let showStr = username;
    if(realname){
        showStr += `(本名: ${realname})`;
    }
    return showStr + "さん";
}

let cheetah = showMember("猫");
let ken = showMember("スージー", "森田");

let br = "<br>";


document.body.innerHTML = cheetah + br +  ken;