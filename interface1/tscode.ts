interface Member {
    firstName: string;
    lastName: string;
    age: number
}

let jane : Member = {
    firstName: "シェーン",
    lastName: "オールマン",
    age: 18
}

let mike: Member = {
    age: 25,
    lastName: "シンクレア",
    firstName: "マイケル"
}
document.body.innerHTML = jane.firstName + mike.age;

