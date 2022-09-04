/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
signUpBtn.addEventListener('click', () => {
  if (signFormsValidation()) {
    signUpPost();
  }
});

password2.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (signFormsValidation()) {
      signUpPost();
    }
  }
});

const signUpPost = () => {
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      username: username.value,
      password: password.value,
      password2: password2.value,
    }),
  })
    .then((res) => res.json())
    // to do later
    // .then((res) => {
    // })
    .catch((error) => console.log(error));
};
