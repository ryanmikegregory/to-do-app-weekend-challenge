console.log('in client');

$(document).ready(init);

//TODO click events
function init() {
  console.log(`$ReAdY, in init!`);
  getTodoList();
  $('.js-add-btn').on('click', submitAddTask);
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
  $('.ul-class').empty();
  $.ajax({
    type: 'GET',
    url: '/api/todo',
  }).then((response) => {
    console.log('in client GET, server response', response);

    render(response);
  });
}

function render(todoArray) {
  $('.ul-class').empty();
  for (let i = 0; i < todoArray.length; i++) {
    const listItem = todoArray[i];
    $('.ul-class').append(`
    <li>${listItem.task_name}
    <button>Complete</button>
    <button>Delete</button>
    </li>
    
`);
  }
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
