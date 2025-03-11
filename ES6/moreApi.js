const handleUser =()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
            .then((data)=> {
                // document.getElementById("userID").innerText = data.id;
                console.log(data.name)
                displayUser(data)
            })
}


const displayUser =(users)=>{
   const firstUser = users[0]
   document.getElementById("userID").innerText = firstUser.name;
}