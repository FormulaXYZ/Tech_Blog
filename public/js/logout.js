const logout = async function () {
    const Response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
    });
    if (Response.ok) {
        document.location.replace('/');
    } else { alert('could not log out'); }
};
document.querySelector(
    '#logout'
).addEventListener('click', logout);