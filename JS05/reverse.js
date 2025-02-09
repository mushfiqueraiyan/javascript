const sentense = "I'm learning frontend development"

let reverse = ""
for(const letter of sentense){
    // console.log(letter)
    reverse = letter + reverse
}
console.log(reverse)



// different way for reverse
let rev = ''
for(let i = 0; i < sentense.length; i++){
    // console.log(i)
    // console.log(sentense[i]);

    const letter = sentense[i]
    rev = letter + rev
}

console.log(rev)



//Another way for reverse

const reve = sentense.split("").reverse().join("")
console.log(reve)