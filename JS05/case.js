const school = "Iqura Kindergarten and High school"
console.log(school)

const subject = "Chemistry"
const book = "chemistry"    // these 2 chemistry are not same first one is upper case and another one is lower case bcz js is case sensitive. so you should use lower case or uppercase to make these simillar

// console.log(subject)
// console.log(subject.toLowerCase()) // chemistry
// console.log(subject.toUpperCase()) // CHEMISTRY

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Im reading book")
}
else{
    console.log("Pass korai dew")  // <-
}

const drink = " water"
const liquid = "   water" // these 2 have gaps thats why they are different so if you want to make these === then you should use trim() to cut all other 2 sides gaps from the string but it will not fixed the gap between the word like wat er <-

if(drink.trim() === liquid.trim()){
    console.log("pani pani")
}
else{
    console.log("Morubumi")
}