const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden" // 문자열로 되있는 것을 오타 안나게 하려고 변수처리 할 때 대문자로 사용
const USERNAME_KEY = "username"

function onLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username)
}
 function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
 }

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit)

}else {
  paintGreetings(savedUsername)
}