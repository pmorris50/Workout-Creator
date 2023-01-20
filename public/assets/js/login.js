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
