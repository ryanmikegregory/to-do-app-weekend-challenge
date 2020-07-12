    --database name--
    weekend_to_do_app_db

    --table structure--
CREATE TABLE "todolist" (
"id" SERIAL PRIMARY KEY,
"task_name" varchar(50) not null,
"completed" boolean
);

    --first test entry--
INSERT INTO todolist (task_name, completed)
VALUES ('Test Task Name', false);