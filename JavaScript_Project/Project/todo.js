let todoList = [
  {item:'Buy Milk',dueDate:'27/12/2023'},{item:'Go to Market',dueDate:'27/12/2023'}
];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input'); 
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = inputElement.value;
  todoList.push(
    {item: todoItem, duedate: todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newhtml = '';


  for(let i = 0; i< todoList.length; i++){

    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item, dueDate} = todoList[i];
    newhtml += `
    <div>
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    </div>
    `;
    containerElement.innerHTML = newhtml; 
  }
}