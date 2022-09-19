const signupFormHandler = async function(event) {
    event.preventDefault();
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

const response = await fetch('api/user', {
    method:'POST',
    body:JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
    }),
    headers:{
        ' content-type':'applicaation/json'}

})
    if (response.ok){document.location.replace('/dashboard');
    }else {
        alert('could not signup');
    }

    };
    
   
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);