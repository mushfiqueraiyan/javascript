function celsiusToFahrenheit(c){
    return ( c * 9/5) + 32
}

const fahrenheit = celsiusToFahrenheit(25)
console.log(fahrenheit)


// problem 02

const numbers = [5, 6, 11, 12, 98, 5];

function findNumber(numbers, find){
    let count = 0
    for(num of numbers){
        if(num === find){
            count++;
        }
    }
    return count
}

const find = findNumber(numbers, 5)
console.log(find)


// problem 03


let name = "Raiyan"

function countVowel(names){
    let count = 0
    for(name of names.toLowerCase()){
        if(name === "a" || name === "e" || name === "i" || name === "o" || name === "u"){
            count++
        }
    }
    return count
}

const names = countVowel(name)
console.log(names) 


// Problem 04

const word = "I am learning Programming to become a programmer";

function longest(sentence){
    const divi = sentence.split(" ")
    let longWord = ""

    for(let div of divi){
        if(div.length > longWord.length){
            longWord = div
        }
    }
    return longWord
}

const long = longest(word)
console.log(long)


// problem 05

const random = Math.floor(Math.random() * 11) + 10;
console.log(random)