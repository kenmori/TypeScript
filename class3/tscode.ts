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
        return super.getMemberFullName() + "どうも"
    }
}

let member = new PremiumMember('kenjifa', 'moritafafa', 37);

let m = member.getMemberFullName();
document.body.innerHTML = m;

