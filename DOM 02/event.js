// 04
const change = document.querySelector("#title-chng");
const title = document.querySelector("#title");
change.addEventListener('click', function(){
    title.innerText = 'Updated Page TItle'
})


user = true
document.querySelector('#login').addEventListener('click', function(){
   if(user){
     document.querySelector("#user-info").innerText = "Logged In";
   }
   else{
     document.querySelector("#user-info").innerText = "Oops! Something went wrong";
   }
})

document.querySelector('#update').addEventListener('click',function(){
    const nameField = document.querySelector('#name-field')
    document.querySelector('#name').innerText = nameField.value
})