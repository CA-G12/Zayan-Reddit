/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const postText = document.querySelector('.text');
const postImageInput = document.querySelector('.imageURL');
const postBtn = document.querySelector('.postBtn');
const postImageBtn = document.querySelector('.postImageBtn');
const textContentBtn = document.querySelector('.textContentBtn');
const previewBtn = document.querySelector('.previewBtn');
const imagePreviewDiv = document.querySelector('.imagePreview');
const addImageDiv = document.querySelector('.addImage');

postImageBtn.addEventListener('click', () => {
  postImageBtn.style.color = '#ff4500';
  postImageBtn.style.borderColor = '#ff4500';
  postImageBtn.style.backgroundColor = '#fffdd0';
  textContentBtn.style.borderColor = '#e8e4e6';
  textContentBtn.style.backgroundColor = 'transparent';
  textContentBtn.style.color = '#004643';
  addImageDiv.style.display = 'flex';
  //-----------------------------------------------------
  previewBtn.addEventListener('click', () => {
    imagePreviewDiv.innerHTML = '';
    if (postImageInput.value) {
      imageURLValidation(postImageInput.value).then(() => {
        const image = document.createElement('img');
        image.src = postImageInput.value;
        image.className = 'previewedImage';
        imagePreviewDiv.appendChild(image);
      }).catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Invalid image URL',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        postImageInput.value = '';
      });
    } else {
      Swal.fire({
        title: 'Attention',
        text: 'No image url to preview!',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  });
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
  postBtn.addEventListener('click', () => {
    if (!postText.value.trim()) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: 'Attention!',
        text: "The text content field can't be empty",
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else { addPost(postText.value, postImageInput.value); }
  });
}
const addPost = (content, image) => {
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
};
