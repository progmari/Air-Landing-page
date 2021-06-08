'use strict';

const form = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.name.value = '';
  form.elements.message.value = '';
});
