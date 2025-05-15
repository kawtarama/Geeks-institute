import psycopg2
from psycopg2 import sql

# Database connection parameters
DB_NAME = "restaurant_db"
DB_USER = "postgres"
DB_PASSWORD = 123  
DB_HOST = "localhost"
DB_PORT = "5432"

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.id = None

    def save(self):
        """Save the menu item to the database"""
        try:
            conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            
            cursor = conn.cursor()
            
            # Insert the new item
            insert_query = """
            INSERT INTO Menu_Items (item_name, item_price) 
            VALUES (%s, %s) RETURNING item_id;
            """
            
            cursor.execute(insert_query, (self.name, self.price))
            self.id = cursor.fetchone()[0]  # Get the newly created item_id
            
            conn.commit()
            cursor.close()
            conn.close()
            return True
            
        except Exception as e:
            print(f"Error saving menu item: {e}")
            return False

    def delete(self):
        """Delete the menu item from the database"""
        try:
            conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            
            cursor = conn.cursor()
            
            # If the item has an ID, delete by ID, otherwise try by name
            if self.id:
                delete_query = "DELETE FROM Menu_Items WHERE item_id = %s;"
                cursor.execute(delete_query, (self.id,))
            else:
                delete_query = "DELETE FROM Menu_Items WHERE item_name = %s;"
                cursor.execute(delete_query, (self.name,))
            
            # Check if any rows were affected
            if cursor.rowcount == 0:
                cursor.close()
                conn.close()
                return False
                
            conn.commit()
            cursor.close()
            conn.close()
            return True
            
        except Exception as e:
            print(f"Error deleting menu item: {e}")
            return False

    def update(self, new_name, new_price):
        """Update the menu item in the database"""
        try:
            conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            
            cursor = conn.cursor()
            
            # If the item has an ID, update by ID, otherwise try by name
            if self.id:
                update_query = """
                UPDATE Menu_Items 
                SET item_name = %s, item_price = %s 
                WHERE item_id = %s;
                """
                cursor.execute(update_query, (new_name, new_price, self.id))
            else:
                update_query = """
                UPDATE Menu_Items 
                SET item_name = %s, item_price = %s 
                WHERE item_name = %s;
                """
                cursor.execute(update_query, (new_name, new_price, self.name))
            
            # Check if any rows were affected
            if cursor.rowcount == 0:
                cursor.close()
                conn.close()
                return False
                
            # Update the object's attributes
            self.name = new_name
            self.price = new_price
            
            conn.commit()
            cursor.close()
            conn.close()
            return True
            
        except Exception as e:
            print(f"Error updating menu item: {e}")
            return False