const express = require('express'); //import express dependency
const router = express.Router(); //tell router to use express
const pool = require('../modules/pool'); //import pool

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "todolist" ORDER BY "task_name" ASC;`;

  pool
    .query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(`No Bueno in GET in todo.router ${error}`);
      res.sendStatus(500);
    });
});

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

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const queryText = `DELETE from "todolist" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((dbResponse) => {
      console.log(`All good in DELETE in todo.router ${dbResponse}`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`No Bueno in DELETE in todo.router ${error}`);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const completeBoolean = req.body;

  const queryText = `UPDATE "todolist" SET "completed" = 'true' WHERE "id" = $1;`;

pool
  .query(queryText, [id])
  .then((dbResponse) => {
    console.log(`All good in PUT in todo.router ${dbResponse}`);
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log(`No Bueno in PUT in todo.router ${error}`);
    res.sendStatus(500);
  });
});

module.exports = router; //export todo.router,js
