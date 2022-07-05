CREATE DATABASE meals_sharing
DEFAULT CHARACTER SET = 'utf8mb4';

USE meals_sharing;

CREATE TABLE meal (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    meal_description TEXT(255) NOT NULL,
    meal_location VARCHAR(255) NOT NULL,
    accessibility_time DATETIME NOT NULL,
    max_reservations INT UNSIGNED NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE reservation (
    id INT UNSIGNED AUTO_INCREMENT,
    number_of_guests INT UNSIGNED NOT NULL,
    meal_id INT UNSIGNED NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

CREATE TABLE review (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    review_description TEXT(255) NOT NULL,
    meal_id INT UNSIGNED NOT NULL,
    stars INT UNSIGNED NOT NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

INSERT INTO meal (title, meal_description, meal_location, accessibility_time, max_reservations, price, created_date)
VALUES ('Beef tartare', 'Beef with something that I hear first time in my life', 'Copenhagen', '2022-07-10 15:00:00', 50, 200, '2022-06-20'),
        ('Salad with mozzarella', 'Just some grass with some cheese', 'Odense', '2022-07-07 18:00:00', 30, 100, '2022-06-25'),
        ('Shripm with pear', 'Shripm with pear and sweet sauce', 'Nykobing F', '2022-07-20 14:00:00', 20, 150, '2022-07-02' );

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, '2022-06-21', '91546755', 'Johan', 'johanS@gmail.com'),
        (5, 1, '2022-06-22', '75342233', 'Nikolas', 'nicolasP@gmail.com'),
        (8, 2, '2022-06-26', '34556678', 'Lillian', 'lillianV@gmail.com'),
        (4, 2, '2022-06-27', '23445565', 'Thomas', 'thomasK@gmail.com'),
        (10, 3, '2022-07-03', '44553455', 'Jane', 'janeJ@gmail.com'),
        (10, 3, '2022-07-05', '12334455', 'Thor', 'thorO@gmail.com');

INSERT INTO review (title, review_description, meal_id, stars, created_date)
VALUES ('Good', 'Good meal, very good meal', 3, 5, '2022-07-02'),
        ('Bad', 'Dry meat', 1, 1, '2022-06-21'),
        ('OK', 'Average vagetables quality', 2, 3, '2022-06-27'),
        ('Amazing', 'Very good vagetables quality', 2, 5, '2022-06-28'),
        ('The best', 'Meat is perfect', 1, 5, '2022-06-22'),
        ('Little bit disappointed', 'Food was food, but too cold', 1, 2, '2022-06-23');

-- Meal Queries
SELECT * FROM meal;

INSERT INTO meal (title, meal_description, meal_location, accessibility_time, max_reservations, price, created_date)
VALUES ('Melon horned with ham', 'I can not imagine who has created this meal', 'Stege', '2022-07-6 16:00:00', 25, 120, '2022-07-03');

SELECT * FROM meal
WHERE id = 1;

UPDATE meal
SET title = 'Beef and beef', price = 210
WHERE id = 1;

DELETE FROM meal
WHERE id = 4;

-- Reservation Queries
SELECT * from reservation;

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, '2022-06-23', '91546754', 'Marta', 'martaQ@gmail.com');

SELECT * from reservation 
WHERE id = 1;

UPDATE reservation
SET contact_phonenumber = 34334455, contact_name = 'Soren'
WHERE id = 1;

DELETE FROM reservation
WHERE id = 1;

-- Review Queries
SELECT * FROM review;

INSERT INTO review (title, review_description, meal_id, stars, created_date)
VALUES ('Shocking', 'The weather was too bad, but the meal was good', 2, 5, '2022-06-28');

SELECT * FROM review
WHERE id = 1; 

UPDATE review
SET title = 'Unexpected good', review_description = 'Perfect', stars = 5
WHERE id = 1;

DELETE FROM review
WHERE id = 1;

-- Additional Queries
SELECT * FROM meal
WHERE price < 150;

SELECT meal.title, meal.max_reservations, COUNT(reservation.id) AS Reserved_number FROM meal
JOIN reservation ON reservation.meal_id = meal.id
GROUP BY meal.title, meal.max_reservations
HAVING Reserved_number < meal.max_reservations;

SELECT * FROM meal
WHERE title LIKE '%Beef%';

SELECT * FROM meal
WHERE created_date BETWEEN '2022-05-01' AND '2022-06-30';

SELECT * FROM meal LIMIT 2;

SELECT meal.title, review.stars from meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars > 3
GROUP BY meal.title, review.stars;

SELECT meal.title AS 'meal_title', reservation.* FROM meal
JOIN reservation on reservation.meal_id = meal.id
WHERE reservation.meal_id = 3
ORDER BY reservation.created_date;

SELECT meal.title, SUM(review.stars) / COUNT(review.id) AS avg_stars FROM meal
JOIN review ON review.meal_id = meal.id
GROUP BY meal.title;
