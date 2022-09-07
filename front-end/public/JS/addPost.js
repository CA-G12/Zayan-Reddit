const postText = document.querySelector('.text');
const postImage = document.querySelector('.imageURL');
const postBtn = document.querySelector('.postBtn');
const imageIcon = document.querySelector('.fa-image');
const homeInput = document.querySelector('.homeInput');

console.log(postText, postImage, postBtn);
if (imageIcon) {
  imageIcon.addEventListener('click', () => window.location.assign('../../protected/createPost.html'));
}
if (homeInput) {
  homeInput.addEventListener('focus', () => window.location.assign('../../protected/createPost.html'));
}
if (postBtn) {
  postBtn.addEventListener('click', () => addPost(postText.value, postImage.value));
}
const addPost = (content, image) => {
  if (!content) {
    Swal.fire({
      title: 'Attention!',
      text: "The text content field can't be empty",
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  } else {
    fetch('/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content, image,
      }),
    }).then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  }
};

const handleDOMnewPost = () =>{

}
