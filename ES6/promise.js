// const loadData = async()=>{
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     console.log(data)
//     }
//     catch{
//         console.log("Error hajir hain")
//     }
// }

// loadData()


const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        const status = true
        if(status){
            const mockData = {
                json:()=> Promise.resolve({name: "hero"})
            }
            resolve(mockData)
        }
        else{
            reject("Server error 4004")
        }
    })
}

console.log(fetchData())

fetchData()
    .then((res)=>res.json())
        .then(data=>console.log(data))
        .then(err=> console.log(err))