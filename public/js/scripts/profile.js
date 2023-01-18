// const button = document.querySelector("#start-mdl-2");

// button.addEventListener('click', (e)=> {
//     e.preventDefault();

//     //instead of just generically saying hello lets when we are clicked find all the elements check marked and then show a list of them
//     document.querySelectorAll('input[type="checkbox"]:checked')
//     const modalBody = document.querySelector('.modal-body')
//     modalBody.addEventListener('change', event =>{
//         if(event.target.type === 'checkbox'){
//             const checked = document.querySelectorAll('input[type="checkbox"]:checked')
//             selected = Array.from(checked).map(x => x.value)
//         }
//     })
//     let $htmlTarget = document.querySelector(".modal-body-2");
//     let htmlTemplate = `${selected}`;
//     $htmlTarget.innerHTML = htmlTemplate;
// })


// const button = document.querySelector("#start-mdl-2");

// button.addEventListener('click', (e)=> {
//     e.preventDefault();

//     let selected = [];
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     selected = Array.from(checkboxes).map(x => x.value);
//     let $htmlTarget = document.querySelector(".modal-body-2");
//     let htmlTemplate = `Selected: ${selected}`;
//     $htmlTarget.innerHTML = htmlTemplate;
// })
// const button = document.querySelector("#start-mdl-2");

// button.addEventListener('click', (e)=> {
//     e.preventDefault();

//     let selected = [];
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     selected = Array.from(checkboxes).map(x => x.nextSibling.textContent.trim());
//     let $htmlTarget = document.querySelector(".modal-body-2");
//     let htmlTemplate = `Selected: ${selected}`;
//     $htmlTarget.innerHTML = htmlTemplate;
// });

const button = document.querySelector("#start-mdl-2");

button.addEventListener('click', (e)=> {
    e.preventDefault();
    let selected = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checkboxes).map(x => x.nextElementSibling.textContent.trim());
    let $htmlTarget = document.querySelector(".modal-body-2");
    let htmlTemplate = `Selected: ${selected}`;
    $htmlTarget.innerHTML = htmlTemplate;
});
