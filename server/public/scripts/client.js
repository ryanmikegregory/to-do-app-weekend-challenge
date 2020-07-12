console.log('in client');

$(document).ready(init);

//TODO click events
function init() {
  console.log(`$ReAdY, in init!`);
  getTodoList();
  $('.addTaskBtn').on('click', submitAddTask);
  $('.jsListContainer').on('click', '.jsDeleteBtn', deleteTaskOnClick);
}

//TODO capture user input EVENT
function submitAddTask() {
  console.log('in submitAddTask');
  let payloadObject = {
    task_name: $('#new-task-input').val(),
    completed: false,
  };
  postTodo(payloadObject);
}

//TODO Ajax GET route
//TODO retrieve from database and append task to page with delete and complete btns
function getTodoList() {
  $('.ulClass').empty();
  $.ajax({
    type: 'GET',
    url: '/api/todo',
  })
    .then((response) => {
      console.log('in client GET, server response', response);
      render(response);
    })
    .catch((error) => {
      console.log(`No bueno in GET-client ${error}`);
    });
}

//TODO send to server and then database
//Ajax POST ROUTE
function postTodo(todoData) {
  $.ajax({
    type: 'POST',
    url: '/api/todo',
    data: todoData,
  })
    .then((response) => {
      getTodoList();
    })
    .catch((error) => {
      console.log(`No bueno in POST-client ${error}`);
    });
}

//Ajax DELETE route
function deleteTask(list) {
  event.preventDefault();
  console.log('in deleteTask');
  $.ajax({
    type: 'DELETE',
    url: `/api/todo/${id}`,
  })
    .then((response) => {
      console.log('in client DELETE, server response', response);
      getTodoList();
    })
    .catch((error) => {
      console.log(`No bueno in DELETE-client ${error}`);
    });
}

function deleteTaskOnClick() {
  const id = $(this).data('listItemId');
  deleteTask(id);
}

function render(todoArray) {
  $('.ulClass').empty();
  for (let i = 0; i < todoArray.length; i++) {
    const listItem = todoArray[i];
    $('.ulClass').append(`
    <ul>
    <li>${listItem.task_name}
    <button class="jsCompleteBtn" data-id-list="${listItem.id}">COMPLETE</button>
    <button class="jsDeleteBtn" data-id-list="${listItem.id}">DELETE</button>
    </li>
    </ul>
    
`);
  }
}

