interface Member {
    firstName: string,
    lastName: string,
    age: number,
    getMemberFullName(): string
}
class NormalMember implements Member {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName:string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getMemberFullName(): string {
        return this.firstName + this.lastName + "さん";
    }
}

class PremiumMember extends NormalMember {
    getMemberFullName(): string {
        return super.getMemberFullName() + "様"
    }
}


class MemberViewer {
    memberArray: Member[];//NormalMemberかPremiumMemberが入る
    constructor (){
        this.memberArray = new Array();
    }
    addMember(member: Member): void {
        this.memberArray.push(member);
    }
    showMembers(): string {
        let showStr = "";
        const br = "<br/>";
        for(let member of this.memberArray){
            showStr += member.getMemberFullName() + br;
        }
        return showStr.substr(0, showStr.length - br.length);
    }
}


const viewer = new MemberViewer();
viewer.addMember(new PremiumMember('kenji', 'morita', 37));
viewer.addMember(new NormalMember('aaa', 'aaaa', 37));
let m = viewer.showMembers();
document.body.innerHTML = m;

