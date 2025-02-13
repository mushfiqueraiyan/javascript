// For a given string tell me whether it has even number of characters or not


//string params
function evenSizedString(str){
    const size = str.length
    
    if(size % 2 === 0){
        return "This name is even"
    }
    else{
        return "This name is odd"
    }
}

const res1 = evenSizedString("Raiyan")
const res2 = evenSizedString("Mushfique")

console.log(res1, res2)


//booleran params
function doubleOrTriple(number, doDouble){
    if(doDouble){
        const res = number * 2 ;
        return res
    }
    else{
        const res = number * 3
        return res;
    }
}


console.log(doubleOrTriple(5, true))
console.log(doubleOrTriple(4, false))


//array params
function numberOfEle(numbers){
    const len = numbers.length
    return len
}

const res = numberOfEle([12,34,565,78,99,100])
console.log(res)



//object params
function getAge(person){
    const age = person.age
    return age;
}

const name1 = getAge({
    name: "Raiyan",
    age: 20,
}) 

console.log(name1)