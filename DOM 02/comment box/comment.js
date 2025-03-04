document.querySelector("#post").addEventListener('click', function(){
    
        // get the text wrriten
    const textNew = document.getElementById('comment')
    const newComment = textNew.value

    // get the parent node where to comment

    const parentDiv = document.querySelector("#comment-field");

        // create a comment p
    const cmt = document.createElement('p')
    cmt.classList.add('comments')
    cmt.innerText = newComment

        // append the new comment to parent
    parentDiv.appendChild(cmt)

        // clean the text field

    textNew.value = " "

})