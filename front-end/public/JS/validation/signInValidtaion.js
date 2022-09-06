/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
signInBtn.addEventListener('click', () => {
  if (signFormsValidation()) {
    signInPostReq();
  }
});

password.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (signFormsValidation()) {
      signInPostReq();
    }
  }
});

const signInPostReq = () => {
  fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        Swal.fire({
          title: res.error,
          text: '',
          icon: 'error',
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
