function welcome() {
  const welcomeMessage = document.querySelector('#welcome');
  let name = prompt('Enter your name');
  if (name) {
    welcomeMessage.textContent = 'Welcome, ' + name + '!';
  }
}

welcome();
