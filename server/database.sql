    --database name--
--weekend-to-do-app--

    --table structure--
CREATE TABLE "todolist" (
"id" SERIAL PRIMARY KEY,
"task_name" varchar(50) not null,
"completed" boolean
);

    --first test entry--
INSERT INTO todolist (task_name, completed)
VALUES ('Test Task Name', false);

   --UPDATE test query--
   UPDATE "todolist" SET "completed" = true WHERE "id" = 191;