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

var member = new NormalMember('kenji', 'morita', 37);

var m = member.getMemberFullName();
document.body.innerHTML = m;

