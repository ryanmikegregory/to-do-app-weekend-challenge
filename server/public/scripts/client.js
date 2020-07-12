console.log('in client');

$(document).ready(init);

//TODO click events
function init() {
  console.log(`$ReAdY, in init!`);
  $('#new-task-form').on('click', '#addTask-btn', submitAddTask);
}

//TODO capture user input EVENT
function submitAddTask() {
  let payloadObject = {
    task_name: $('#new-task-input').val(),
    completed: false,
  };
}

//TODO send to server and then database

//Ajax POST ROUTE
function postTodo() {
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

//TODO retrieve from database and append task to page with delete and complete btns
