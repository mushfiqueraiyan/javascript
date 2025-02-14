const biryaniKhor = ['abul', 'babul', 'kabul', 'babul', 'abul', 'bulbul']
const numbers = [1,3,4,5,43,5,81,22,81]


function noDupli(arr){
    const unq = []
    for(const item of arr){
        if(unq.includes(item) === false){
            unq.push(item)
        }
    }
    return unq
}


const value = noDupli(biryaniKhor)
const value2 = noDupli(numbers)
console.log(value)
console.log(value2)