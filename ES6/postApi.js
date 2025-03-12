const handlePost = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
            .then((data) => setPost(data))
}

const setPost = (datas)=>{
    const postContainer = document.getElementById("post-container");
    for(const data of datas){
        console.log(data)
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <h1>${data.title}</h1>
        <p>${data.body}</p>
        `
        postContainer.appendChild(div)
    }
}
