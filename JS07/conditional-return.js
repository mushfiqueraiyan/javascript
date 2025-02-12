function isEven(number){
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }
}

const res = isEven(4)
console.log(res)
console.log("----------------")
const res2 = isEven(5)
console.log(res2)


console.log("-----------------------------------");

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

const result = isOdd(4);
console.log(result);
console.log("----------------");
const result2 = isOdd(5);
console.log(result2);