const add = (a,b)=>{
    return a + b
}

const result = add(7,1)
console.log(result)





// ---Problem 01
function bazar(totalMoney, morich, mach, shobji){
    const cost = morich + mach + shobji
    const sum = totalMoney - cost
    return sum
}

const totalPrice = 1500
const morichPrice = 100
const machPrice = 500
const shobjiPrice = 600

const bazars = bazar(totalPrice, morichPrice, machPrice, shobjiPrice)
console.log(bazars)


// Problem 02

const patrilist = ['Raiyan', 'Haiyan']

function findPatri(lists){
    let temp = []

    for(let i = 0; i < lists.length; i++){
        const patriName = lists[i].toLowerCase();
        if(patriName.includes("h")){
            temp.push(patriName)
        }

    }
    return temp
}

const patri = findPatri(patrilist)
console.log(patri)


// Problem 03

const heroBioData =[ {
    name: 'Hero Alom',
    age: 20,
    district: 'Dhaka'
},
{
    name: 'Kiro Alom',
    age: 30,
    district: 'chitagong'
},
{
    name: 'Miro Alom',
    age: 40,
    district: 'Dhaka'
}
]

function finded(datas){
    let dataBio = []
    for(const data of datas){
       const area = data.district

        if(area === 'Dhaka'){
            dataBio.push(data)
        }
    }
    return dataBio
}

const dataa = finded(heroBioData)
console.log(dataa)