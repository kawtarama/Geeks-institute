create table Customer (
id serial primary KEY , 
first_name VARCHAR (100) not null,
last_name VARCHAR (100) NOT NULL
);

create table customer_profile (
id serial primary key ,
 isLoggedIn BOOLEAN DEFAULT FALSE,
 customer_id INT UNIQUE REFERENCES customer(id)

);



insert into customer (first_name, last_name) values
('John','Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');



INSERT into customer_profile (isLoggedIn, customer_id)
VALUES (TRUE, (SELECT id FROM customer WHERE first_name = 'John'));

INSERT into customer_profile (customer_id)
VALUES ((SELECT id FROM customer WHERE first_name = 'Jerome'));

SELECT c.first_name
FROM customer c
JOIN customer_profile p ON c.id = p.customer_id
WHERE p.isLoggedIn = TRUE;


SELECT c.first_name, p.isLoggedIn
FROM customer c
LEFT JOIN customer_profile p ON c.id = p.customer_id;


SELECT COUNT(*) AS not_logged_in_count
FROM customer c
LEFT JOIN customer_profile p ON c.id = p.customer_id
WHERE p.isLoggedIn = FALSE OR p.isLoggedIn IS NULL;


-- 2

create table  book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);



insert  into book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


CREATE table student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);


INSERT into student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);



CREATE TABLE library (
    book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id, borrowed_date)
);



INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'John'),
    '2022-02-15'
);


INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-03-03'
);


INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM student WHERE name = 'Lera'),
    '2021-05-23'
);


INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM student WHERE name = 'Bob'),
    '2021-08-12'
);





SELECT * FROM library;


SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;



SELECT AVG(s.age) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student WHERE name = 'Bob';

