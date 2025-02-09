const firstName = "Mushfique"
const lastName = "Raiyan"

// const fullName = firstName + ' ' + lastName

const fullName = firstName.concat(' ').concat(lastName)
console.log(fullName)


//includes

console.log(lastName.includes("R")) // True
console.log(lastName.includes("r")) // False