const newFormHandler = async function(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;


    await fetch('api/post',{
        method: 'POST',
    body:JSON.stringify({
        title, body
    }),
    headers:{' content-type':'applicaation/json' }
    });
    
   document.location.reload();
}


document.querySelector('#new-post-Form').addEventListener('submit', newFormHandler);