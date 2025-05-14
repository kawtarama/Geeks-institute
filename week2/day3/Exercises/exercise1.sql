select * from language

select 
 film.title, 
 film.description, 
 language.name AS language_name
 from film
 INNER JOIN language ON film.language_id = language.language_id;


select 
 film.title,
  film.description,
   language.name as language_name
  from language
  left join film on film.language_id = language.language_id;


 create table new_film (
 id SERIAL primary key,
 name VARCHAR(255)not null
);


INSERT INTO new_film (name) VALUES 
('the movi'),
('The Matrix');



create table customer_review(
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    titre VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO customer_review (film_id, language_id, titre, score, review_text)
VALUES 
(1, 1, 'Génial', 9, 'Un excellent thriller de science-fiction.'),
(2, 1, 'Époustouflant', 10, 'Une révolution dans les films d’action et science-fiction.');


DELETE FROM new_film WHERE id = 1;

update film 
set language_id = (
select language_id from language where name = 'French'
)

WHERE LANGUAGE_ID = ( 
SELECT language_id from language where name = 'English '
);


 \d customer


DROP TABLE customer_review;

-- 2

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


SELECT film.title, film.replacement_cost
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;


SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
  AND (film.description ILIKE '%sumo%' OR film.title ILIKE '%sumo%');


SELECT title
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';


SELECT DISTINCT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
  AND payment.amount > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';





SELECT DISTINCT film.title, film.replacement_cost
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
  AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC;

