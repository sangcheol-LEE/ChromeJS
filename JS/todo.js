const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');// 1번
//const toDoInput = document.querySelector('#todo-form input');// 2번 // 1번과 2번은 같다.
const toDoList = document.getElementById('todo-list');


function deleteToDo (event) {
  const li =event.target.parentElement; // 지금 누르는 버튼이 어떤 li 태그인지 알고,
  //  삭제할 수 있게 확인하는 방법 . 미쳤다 ,,,,
  li.remove(); //버튼의 부모요소인 li를 버튼을 클릭하면 삭제시킵니다.
}

function paintToDo (newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = "❌ ";
  button.addEventListener('click',deleteToDo);
  li.appendChild(span); // li는 span 이라는 자식을 갖게 되었다.
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit (event) {
  event.preventDefault(); // submtit 됐을 때 자동적으로 새로고침 되는 걸 막아준다.// event = submit 
  const newTodo = toDoInput.value; // 이 문에서 하는 건 input의 현재value를 새로운 변수(newTodo)에 복사
  toDoInput.value = ""; // 이후에 뭘 하든 newToDo 변수와는 아무상관없다. 값은 계속 저장 되있기 때문.
  paintToDo(newTodo);
};
toDoForm.addEventListener('submit', handleToDoSubmit);