const loadUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
            .then((data)=> showUser(data))
}

const showUser = (users)=>{

    const userContainer = document.getElementById("users");
    for(const user of users){
        const li = document.createElement("li")
        li.innerHTML = `
        <div>
        <h1>${user.name}</h1>
        <p>${user.id}</p>
        </div>
        `
        userContainer.appendChild(li)
    }
}