// function toggleResetPswd(e) {
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle() // display:block or none
//     $('#logreg-forms .form-reset').toggle() // display:block or none
// }

// function toggleSignUp(e) {
//     e.preventDefault();
//     $('#logreg-forms .form-signin').toggle(); // display:block or none
//     $('#logreg-forms .form-signup').toggle(); // display:block or none
// }

// $(() => {
//     // Login Register Form
//     $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
//     $('#logreg-forms #cancel_reset').click(toggleResetPswd);
//     $('#logreg-forms #btn-signup').click(toggleSignUp);
//     $('#logreg-forms #cancel_signup').click(toggleSignUp);
// })

const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('front end submission')

    // Collect values from the login form
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    console.log(email, password)
    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            const message = await response.json();
            alert(message.message);

        }
    }

};
document
    .querySelector('#login-submit-button')
    .addEventListener('click', loginFormHandler);

// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (name && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };



// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
