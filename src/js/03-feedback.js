import throttle from 'lodash.throttle';

// Variables
const formRef = document.querySelector('form');
const emailInputRef = formRef.querySelector('input');
const messageInputRef = formRef.querySelector('textarea');
// let userEmail = '';
// let userMessage = '';
const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
const KEY_STORAGE = 'feedback-form-state';

hadLocalStorage();
// Listeners
formRef.addEventListener('input', throttle(saveFormValue, 500));
formRef.addEventListener('submit', cleanStorage);

// Functions
function saveFormValue(event) {
  const { name, value } = event.target;
  let saveData = JSON.parse(localStorage.getItem(KEY_STORAGE)) ?? {};
  saveData[name] = value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(saveData));
  //   if (event.target === emailInputRef) {
  //     userEmail = event.target.value;
  //   }
  //   if (event.target === messageInputRef) {
  //     userMessage = event.target.value;
  //   }
  //   const userData = { email: userEmail, message: userMessage };
  //   localStorage.setItem(KEY_STORAGE, JSON.stringify(userData));
}

function hadLocalStorage() {
  if (localStorage.getItem(KEY_STORAGE) !== null) {
    emailInputRef.value = storageData.email;
    messageInputRef.value = storageData.message;
  }
}

function cleanStorage(event) {
  event.preventDefault();
  console.log(localStorage.getItem(KEY_STORAGE));
  localStorage.removeItem(KEY_STORAGE);
  formRef.reset();
}

// Function calls
