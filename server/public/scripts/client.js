console.log('in client');

$(document).ready(init);

//TODO click events
function init() {
  console.log(`$ReAdY, in init!`);
  $('#addTask-btn').on('click', submitAddTask);
}

//TODO capture user input EVENT
function submitAddTask(event) {
  event.preventDefault();
  console.log('in submitAddTask');
  let payloadObject = {
    task_name: $('#new-task-input').val(),
    completed: false,
  };
  postTodo(payloadObject);
}

//TODO Ajax GET route
//TODO retrieve from database and append task to page with delete and complete btns
function getTodoList(){
    
}


//TODO send to server and then database
//Ajax POST ROUTE
function postTodo(todoData) {
  $.ajax({
    type: 'POST',
    url: '/api/todo',
    data: todoData,
  })
    .then((dbResponse) => {
      //get stuff//render call goes here renderList(dbResponse)
    })
    .catch((error) => {
      console.log(`No bueno in POST-client ${error}`);
    });
}


