const number = [1,2,3,4,5,6,7];

const newNumbers = number.map(value => {
    return value + 1;
});
console.log(newNumbers)


const newSqr = number.map((value)=>{
   return value * value
})

console.log(newSqr)


const friends = ['Korim', 'Rohim', 'Raiyan', 'Mushfique'];

const newFriends = friends.map((friend, index)=>{
    console.log(index);
    return friend
})

console.log(newFriends)