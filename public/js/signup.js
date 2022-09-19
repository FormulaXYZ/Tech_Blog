const commentFormHandler = async function(event) {
    event.preventDefault();
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-ploin');

constbresponse = await fetch('api/user/login', {
    method:'POST',
    body:JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
   