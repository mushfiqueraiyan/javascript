const today = new Date()
console.log(today)

const date = new Date('2062-10-19')
console.log(date.getDay())

const speday = new Date(2091, 0, 26)
console.log(speday)
speday.setMonth(10)
console.log(speday)
console.log(speday.toLocaleString('en-GB'))