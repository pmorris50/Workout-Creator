const signupFormHandler = async (event)=> {
    event.preventDefault();
    const first_name = document.getElementById('paul').value.trim()
   
    const last_name =document.getElementById('cwik').value.trim();
    const email = document.getElementById('paul@cwik.com').value.trim();
    const password = document.getElementById('Password1234!').value.trim();

    if (first_name && last_name && email && password){
        console.log(first_name)
        const response = await fetch('/api/signup',{
            method: 'POST',
            body: JSON.stringify({first_name, last_name, email, password}),
            headers:{'Content-Type': 'application/json'},
        });

        if (response.ok){
            document.location.replace('/profile');
        }else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.signup-form')
.addEventListener('click',signupFormHandler);