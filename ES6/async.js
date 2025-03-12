// const handleUsers = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=> res.json())
//             .then((data) => console.log(data))
//                 .catch(error=> console.log(error))
// }

// handleUsers()



const handleUsers2 = async()=>{
   try{
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    console.log(data)
   }
   catch{
    console.log("Error chacha eshe gese")
   }
}

handleUsers2()