function arr(numbers){
//    console.log(numbers)
    let sum = 0
    for(const num of numbers){
        const value = num;
        sum += value
    }
    return sum;
}

const sum = arr([10,20,50])
console.log("Sum of number is : ", sum)