function validateEmail(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.toLowerCase();
  const password = passwordInput.value;


  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('senha');

  if (email === storedEmail && password === storedPassword) {
    goToIndex(); 
  } else {
    displayLoginError();
  }
}

function goToIndex() {
  window.location.href = '/pags/main.html';
}

function displayLoginError() {
  const loginError = document.getElementById('login-error');
  loginError.style.display = 'block';
}