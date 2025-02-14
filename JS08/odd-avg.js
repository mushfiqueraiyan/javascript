function oddAvg(arr){
   let odd = []
   
    for(const number of arr){
    if(number % 2 !== 0){
        odd.push(number)
    }
   }

   let sum = 0
    for(const number of odd){
        sum += number
    }
    
    const count = odd.length
    const avg = sum / count
    return avg
    
}
const oddNum = oddAvg([1,44,33,66,55,78,90])
console.log(oddNum) 