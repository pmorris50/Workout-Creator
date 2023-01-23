const logout = async()=> {
    const response = await fetch('/api/users/logout',{
        method: 'POST',
        header:{'Content-Type': 'application/json'},

    });
    if(response.ok){
        console.log('working')
        document.location.replace('/');
    }else {
        console.log('failed')
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);