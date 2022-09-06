/* eslint-disable no-unused-vars */
const logout = () => {
  fetch('/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      window.location.href = '/';
    })
    .catch(console.error);
};
