import psycopg2
from menu_item import MenuItem, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """
        Retrieve a menu item by its name
        Returns a MenuItem object if found, None otherwise
        """
        try:
            conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            
            cursor = conn.cursor()
            
            query = "SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_name = %s;"
            cursor.execute(query, (name,))
            
            item = cursor.fetchone()
            
            cursor.close()
            conn.close()
            
            if item:
                menu_item = MenuItem(item[1], item[2])
                menu_item.id = item[0]
                return menu_item
            else:
                return None
                
        except Exception as e:
            print(f"Error retrieving menu item: {e}")
            return None
    
    @classmethod
    def all_items(cls):
        """
        Retrieve all menu items from the database
        Returns a list of MenuItem objects
        """
        try:
            conn = psycopg2.connect(
                dbname=DB_NAME,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            
            cursor = conn.cursor()
            
            query = "SELECT item_id, item_name, item_price FROM Menu_Items ORDER BY item_name;"
            cursor.execute(query)
            
            items = cursor.fetchall()
            
            cursor.close()
            conn.close()
            
            menu_items = []
            for item in items:
                menu_item = MenuItem(item[1], item[2])
                menu_item.id = item[0]
                menu_items.append(menu_item)
                
            return menu_items
                
        except Exception as e:
            print(f"Error retrieving all menu items: {e}")
            return []