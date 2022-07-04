-- Part 1: Working with tasks
INSERT INTO user (name, email) 
VALUES ('Rostyslav', 'rostik94@gmail.com');

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Do the homework', 'Week2 homework', '2022-07-04', '2022-07-04', '2022-07-10', 1, 13);

UPDATE task set title = 'Database Week2 Homework'
Where id = 36;

UPDATE task set due_date = '2022-07-04'
WHERE id = 36;

UPDATE task set status_id = 2
WHERE id = 36;

UPDATE task set status_id = 3
WHERE id = 36;

DELETE FROM task WHERE id = 36;

-- Part 2: School database
CREATE DATABASE school
    DEFAULT CHARACTER SET = 'utf8mb4';

USE school;

CREATE TABLE class (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(255) NOT NULL,
    begins DATETIME NOT NULL,
    ends DATETIME NOT NULL
);

CREATE TABLE student (
    id INT UNSIGNED AUTO_INCREMENT,
    student_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    phone VARCHAR(255) unique,
    class_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (class_id) REFERENCES class(id)
);

CREATE INDEX idx_name
ON student (student_name);


ALTER TABLE student
ADD status ENUM ('not-started', 'ongoing', 'finished') NOT NULL;

-- Part 3: More queries
SELECT task.title AS 'Task Name', user.name AS 'User Name' FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com%'; 

SELECT task.title AS 'Task Name', user.name AS 'User Name', status.name AS 'Task Status' FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' 
AND task.status_id = 1; 

SELECT task.title AS 'Task Name', user.name AS 'User Name' FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' 
AND month(task.created) = 9; 

SELECT COUNT(task.id) AS 'Tasks amount', MONTH(task.created) AS 'Task Created Month' FROM task
GROUP BY MONTH(task.created);

-- Part 4: Creating a database

CREATE DATABASE bilka_db
    DEFAULT CHARACTER SET = 'utf8mb4';

USE bilka_db;

CREATE TABLE store (
    id INT UNSIGNED AUTO_INCREMENT,
    store_city VARCHAR(255) NOT NULL,
    store_address VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT,
    department_name VARCHAR(255) NOT NULL,
    employee_amount INT NOT NULL,
    store_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE position_type (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE responsibility (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    position_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (position_id) REFERENCES position_type(id)
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    position_id INT UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (position_id) REFERENCES position_type(id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE practicant (
    id INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    position_id INT UNSIGNED NOT NULL,
    menthor_id INT UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (menthor_id) REFERENCES employee(id),
    FOREIGN KEY (position_id) REFERENCES position_type(id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);