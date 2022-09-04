/* eslint-disable no-undef */
signInBtn.addEventListener('click', () => {
  if (signFormsValidation()) {
    signInPost();
  }
});

password.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('sign in enterrrr');
    if (signFormsValidation()) {
      signInPost();
    }
  }
});
