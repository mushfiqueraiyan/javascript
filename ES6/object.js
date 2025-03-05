const person = {
    name: "Raiyan",
    age: 10,
    country: "Bangladesh"
}

console.log(Object.keys(person));
console.log(Object.values(person))

Object.seal(person)

Object.freeze(person)

person.age = 21

person.status = "Not found"

console.log(Object.entries(person));




for(let key in person){
    console.log(` key is ${key} value : ${person[key]}`)
}

console.log("       -       ")

for(let [key,value] of Object.entries(person)){
    console.log(`key: ${key} value: ${value}`)
}

