interface Member {
    username: string;
    realname?: string;
}

let kenji: Member = {username: "けんもり"};
let morita: Member = {username: "もりけん", realname: "森田賢二"};

function showMember(member: Member) :string {
    let showStr = member.username;
    if(member.realname){
        showStr += `(本名: ${member.realname})`;
    }
    return showStr + "さん";
}

let br = "<br>";


document.body.innerHTML = showMember(kenji)+ br + showMember(morita);