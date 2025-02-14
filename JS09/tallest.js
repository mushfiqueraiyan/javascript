const heights = [65,68,72,78,60,55]

function getMax(numbers){
    let allMax = numbers[0]
    for(num of numbers){
        if (num > allMax) {
          allMax = num;
        }
    }
    return allMax
}
const max = getMax(heights)
console.log('Max value is ', max)


//Home work task ---- extra
function getMin(numbers){
    let allMin = numbers[0]
    for(const num of numbers){
        if(num < allMin){
            allMin = num
        }
    }
    return allMin
}

const min = getMin(heights)
console.log('Min value is ', min)