document.querySelector("#input-delete").addEventListener('keyup', function(e){
    const text = e.target.value;
    const btnDel = document.querySelector("#btn-delete")
    if(text === 'delete'){
        btnDel.removeAttribute('disabled');
    }
    else{
        console.log('something else')
        btnDel.setAttribute('disabled', true);
    }
})