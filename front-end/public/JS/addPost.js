const postText = document.querySelector('.text');
const postImageInput = document.querySelector('.imageURL');
const postBtn = document.querySelector('.postBtn');
const postImageBtn = document.querySelector('.postImageBtn');
const textContentBtn = document.querySelector('.textContentBtn');

postImageBtn.addEventListener('click', () => {
  postImageBtn.style.color = '#ff4500';
  postImageBtn.style.borderColor = '#ff4500';
  postImageBtn.style.backgroundColor = '#fffdd0';
  textContentBtn.style.borderColor = '#e8e4e6';
  textContentBtn.style.backgroundColor = 'transparent';
  textContentBtn.style.color = '#004643';
  postImageInput.style.display = 'block';
});
textContentBtn.addEventListener('click', () => {
  textContentBtn.style.color = '#ff4500';
  textContentBtn.style.borderColor = '#ff4500';
  textContentBtn.style.backgroundColor = '#fffdd0';
  postImageBtn.style.borderColor = '#e8e4e6';
  postImageBtn.style.backgroundColor = 'transparent';
  postImageBtn.style.color = '#004643';
});
if (postBtn) {
  // eslint-disable-next-line no-use-before-define
  postBtn.addEventListener('click', () => addPost(postText.value, postImageInput.value));
}
const addPost = (content, image) => {
  if (!content) {
    // eslint-disable-next-line no-undef
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
      .then((post) => { window.location.href = `/post/${post.postId}/display`; })
      .catch(console.log);
  }
};
