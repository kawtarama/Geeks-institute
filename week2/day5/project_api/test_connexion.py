from sqlalchemy import create_engine

DATABASE_URL = "postgresql://postgres:123@localhost:5432/user_db"
engine = create_engine(DATABASE_URL)

try:
    conn = engine.connect()
    print("Connexion à PostgreSQL réussie")
    conn.close()
except Exception as e:
    print("Erreur de connexion :", e)
