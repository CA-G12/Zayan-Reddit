/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
signUpBtn.addEventListener('click', () => {
  if (signFormsValidation()) {
    signUpPostReq();
  }
});

password2.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (signFormsValidation()) {
      signUpPostReq();
    }
  }
});

const signUpPostReq = () => {
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
    .then((res) => {
      if (res.error) {
        Swal.fire({
          title: res.error,
          text: '',
          icon: 'warning',
          confirmButtonText: 'OK',
        });
      } else {
        window.location.assign('/');
      }
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
};
