const person = {
    name: "Raiyan",
    age: 10,
}


const newPerson = JSON.stringify(person);
console.log(newPerson);
console.log(typeof person);

const person2 = JSON.parse(newPerson)
console.log(typeof person2)
console.log(person2)