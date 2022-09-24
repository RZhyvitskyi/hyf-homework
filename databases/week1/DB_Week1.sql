-- 1
SELECT COUNT(id) FROM task;

-- 2
SELECT COUNT(id) FROM task
WHERE due_date IS NULL;

-- 3
SELECT task.title AS task_name, status.name AS status_name FROM task JOIN status ON task.status_id = status.id
WHERE status.name = 'Done';

-- 4
SELECT task.title AS task_name, status.name AS status_name FROM task JOIN status ON task.status_id = status.id
WHERE status.name <> 'Done';

-- 5
SELECT * FROM task ORDER BY created DESC;

-- 6
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7
SELECT task.title, task.description, task.due_date FROM task
WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';

-- 8
SELECT task.title AS task_name, status.name AS status_name FROM task JOIN status ON task.status_id = status.id;

-- 9
SELECT status.name AS 'Task Status', COUNT(task.status_id) AS 'Task amount' FROM task
JOIN status ON task.status_id = status.id
GROUP BY status_id;

-- 10
SELECT status.name AS task_status, COUNT(task.status_id) AS tasks_amount FROM task
JOIN status ON task.status_id = status.id
GROUP BY task_status
ORDER BY COUNT(task.status_id) desc;
