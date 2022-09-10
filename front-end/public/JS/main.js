/* eslint-disable no-undef */
fetch('/posts').then((res) => res.json()).then((posts) => posts.reverse().forEach((postData) => renderPost(postData))).catch(console.error);
