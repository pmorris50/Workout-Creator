const signupFormHandler = async (e) =>{
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (firstName && lastName && email && password){
        const response = await fetch('/api/signup',{
            method: 'POST',
            body: JSON.stringify({firstName, lastName, email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok){
            console.log('response sent')
            document.location.replace('/profile')
        } else {
            alert('Failed to signup, please fill out all fields and ensure password contains 8 characters, an uppercase character, and a special character');
        }
    }
}


document
.querySelector('.signup-form')
.addEventListener('click', signupFormHandler);