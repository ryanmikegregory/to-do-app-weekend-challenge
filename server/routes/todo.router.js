const express = require('express'); //import express dependency
const router = express.Router(); //tell router to use express
const pool = require('../modules/pool'); //import pool

module.exports = router; //export todo.router,js

router.post('/', (req, res) => {
  const todoData = req.body;
  const queryText = `INSERT INTO "todolist" ("task_name", "completed")
                        VALUES ($1, $2);`;
  pool
    .query(queryText, [todoData.task_name, todoData.completed])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`No Bueno in POST in todo.router ${error}`);
      res.sendStatus(500);
    });
});
