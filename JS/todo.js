const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');// 1번
//const toDoInput = document.querySelector('#todo-form input');// 2번 // 1번과 2번은 같다.
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos"

// localStorage에 저장하기
let toDos = [];

//localStorage 에는 array를 저장할 수 없다. 오직 텍스트만 저장할 수 있다.
//그렇기에 toDos array의 내용을 localStorage 에 넣는다. 
function saveToDos () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify()은 자바스크립트 객체나 배열 또는 어떤 코드던 간에 string으로 만들어준다.
  // JSON.parse()는 string 값으로도 array로 만들 수 있습니다.
  // JSON.parse("[1,2,3,4]" => [1,2,3,4])
}


function deleteToDo (event) {
  const li =event.target.parentElement; // 지금 누르는 버튼이 어떤 li 태그인지 알고,
  //  삭제할 수 있게 확인하는 방법 . 미쳤다 ,,,,
  li.remove(); //버튼의 부모요소인 li를 버튼을 클릭하면 삭제시킵니다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo (newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = "❌ ";
  button.addEventListener('click',deleteToDo);
  li.appendChild(span); // li는 span 이라는 자식을 갖게 되었다.
  li.appendChild(button);
  toDoList.appendChild(li);
}
// 1번
function handleToDoSubmit (event) {
  event.preventDefault(); // submtit 됐을 때 자동적으로 새로고침 되는 걸 막아준다.// event = submit 
  const newTodo = toDoInput.value; // 이 문에서 하는 건 input의 현재value를 새로운 변수(newTodo)에 복사
  toDoInput.value = ""; // 이후에 뭘 하든 newToDo 변수와는 아무상관없다. 값은 계속 저장 되있기 때문.
  const newTodoObj = {
    text:newTodo,
    id: Date.now(), //Date.now()는 밀리초(1000분의 1초)를 주는 함수이다.
  }
  toDos.push(newTodoObj);// 여기서 데이터베이스로 매번 사용자가 적어둔 텍스트를 push 합니다.
  paintToDo(newTodoObj);
  saveToDos(); // 이 함수가 동작하는 건 오로지 toDos array를 localStorage에 저장하는 것.
};
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;//디폴트가 빈 배열이라 전부 덮어쓰는 걸 막기 위해 사용
  parseToDos.forEach(paintToDo);
}

//Date.now() 는 밀리초(1000분의 1초)를 주는 함수이다.
