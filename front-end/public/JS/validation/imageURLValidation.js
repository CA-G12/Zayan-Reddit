const imageURLValidation = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onerror = () => {
    reject(new Error('invalid'));
  };
  img.onload = () => {
    resolve('valid');
  };
  img.src = url;
});
