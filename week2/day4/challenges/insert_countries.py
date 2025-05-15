import requests
import random
import psycopg2

# --- Database connection parameters ---
DB_NAME = "countries_db"      
DB_USER = "postgres"         
DB_PASS = 123        
DB_HOST = "localhost"
DB_PORT = "5432"             

# --- Connect to PostgreSQL ---
def connect_db():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASS,
        host=DB_HOST
    )

# --- Fetch and insert countries ---
def insert_random_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)

    if response.status_code != 200:
        print("Failed to fetch countries from API.")
        return

    all_countries = response.json()
    random_countries = random.sample(all_countries, 10)

    conn = connect_db()
    cur = conn.cursor()

    for country in random_countries:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["Unknown"])[0]
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)

        cur.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, capital, flag, subregion, population))

    conn.commit()
    cur.close()
    conn.close()
    print("Inserted 10 random countries into the database.")

if __name__ == "__main__":
    insert_random_countries()
