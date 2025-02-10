const numbers = [1,2,3,4,5,6,7]

// arr.reverse()
// console.log(arr)

const rev = []

// for(const num of numbers ){
//     // console.log(num)
//     rev.unshift(num)
// }


// for(let i = 0; i <numbers.length; i++){
//     const num = numbers[i];
//     rev.unshift(num)
// }
// console.log(rev)


for(let i = numbers.length - 1; i >= 0; i-- ){
    const num = numbers[i]
    console.log(num)
}