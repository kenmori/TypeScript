class UniversalMember {
    username: string;
    realname: string;
    constructor(){
        this.username = "anonymous";//属性を空にしないclass
        this.realname = "匿名";
    }
    static createMember(username?: string, realname?:string): UniversalMember {//ファクトリメソッド・・・メソッドの中でオブジェクトを作成して属性値を与えてそのオブジェクトを返すメソッド。staticにする
        let member = new UniversalMember();
        if(username != null) {
            member.username = username;
        }
        if(realname != null){
            member.realname = realname;
        }
        return member;
    }
    showMember() :string {
        return `${this.username} (本名) ${this.realname}`;
    }
}


let kenji = UniversalMember.createMember("けんもり");
let morita = UniversalMember.createMember("もりけん","森田賢二")


let br = "<br>";


document.body.innerHTML = kenji.showMember()+ br + morita.showMember();