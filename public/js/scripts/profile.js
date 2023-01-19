

const button = document.querySelector("#start-mdl-2");

button.addEventListener('click', (e)=> {
    e.preventDefault();
    let selected = [];
    let equipIds = []
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checkboxes).map(x => x.nextElementSibling.textContent.trim());
    equipIds = Array.from(checkboxes).map(x =>x.getAttribute('data-equipid'))
    let $htmlTarget = document.querySelector(".modal-body-2");
    let htmlTemplate = `Selected: ${selected}`;
    $htmlTarget.innerHTML = htmlTemplate;



    console.log(equipIds)
});


