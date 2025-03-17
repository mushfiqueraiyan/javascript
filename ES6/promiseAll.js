const urls = [
  `https://jsonplaceholder.typicode.com/posts`,
  `https://jsonplaceholder.typicode.com/albums`,
  `https://jsonplaceholder.typicode.com/comments`,
];

Promise.all(urls.map(url=>{
    return fetch(url)
        .then((res)=>res.json())
            .then((data)=> console.log(data));
}))

.then((res)=>res)
    .then((data)=>console.log(data));