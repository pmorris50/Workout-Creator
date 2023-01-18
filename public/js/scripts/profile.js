const button = document.querySelector("#start-mdl-2");

button.addEventListener('click', (e)=> {
    e.preventDefault();
    //instead of just generically saying hello lets when we are clicked find all the elements check marked and then show a list of them
    
    let $htmlTarget = document.querySelector(".modal-body-2");
    let htmlTemplate = `<h2>Hi Patrick</h2>`;
    $htmlTarget.innerHTML = htmlTemplate;
})

