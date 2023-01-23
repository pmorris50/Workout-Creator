

const button = document.getElementById("start-mdl-2");

button.addEventListener('click', (e) => {
    console.log('starting workout')
    e.preventDefault();
    let selected = [];
    let equipIds = []
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    selected = Array.from(checkboxes).map(x => x.nextElementSibling.textContent.trim());
    equipIds = Array.from(checkboxes).map(x => x.getAttribute('data-equipid'))
    let $htmlTarget = document.querySelector(".modal-body-2");
    let htmlTemplate = `Selected: ${selected}`;
    $htmlTarget.innerHTML = htmlTemplate;
    fetch('/api/exercises', {
        method: 'POST',
        body: JSON.stringify({ equipId: equipIds }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json()).then(data => {
            let $target = document.querySelector('#exercises-target');
            let html = ``
            for (let exercise of data) {
                html += `<h3>${exercise.name}</h3> <video width="320" height="240" controls>
 
            <source src= "${exercise.demo_link}" type="video/webm">
            Your browser does not support the video tag.
          </video>`
            };
            $target.innerHTML = html;
            console.log(data)
        })

        .catch(err => {
            console.error(err);
        });
});




