const postId = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async function(event){
    event.preventDefault();
    const title = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;


    await fetch(`api/post/${postId}`,{
        method: 'PUT',
    body:JSON.stringify({
        title, body
    }),
    headers:{' content-type':'applicaation/json' }
    });
    
   document.location.replace('/dashboard');
};
const deleteClickHandler = async function(){
    await fetch(`/api/post/${postId}`,{
        method: 'DELETE'
    });
    document.location.replace('/dashboard')
};
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);

document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);
