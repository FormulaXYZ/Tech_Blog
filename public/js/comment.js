const commentFormHandler = async function(event) {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

if (body){
    await fetch('api/cooment',{
        method: 'POST',
    body:JSON.stringify({
        postId, body
    }),
    Headers:{' content-type':'applicaation/json' }
    });
    
   document.location.reload();
}
};

document.querySelector('#new-commentFormHandler').addEventListener('submit', commentFormHandler);