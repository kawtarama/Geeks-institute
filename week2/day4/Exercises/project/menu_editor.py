from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    """Display the program menu and handle user input"""
    while True:
        print("\n===== Restaurant Menu Editor =====")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(X) Exit")
        
        choice = input("\nEnter your choice: ").strip().upper()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'X':
            print("\nExiting program. Here's the final menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def view_item():
    """View details of a specific menu item"""
    name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(name)
    
    if item:
        print(f"\nItem: {item.name}")
        print(f"Price: ${item.price}")
    else:
        print(f"Item '{name}' not found in the menu.")

def add_item_to_menu():
    """Add a new item to the menu"""
    name = input("Enter the name of the new item: ").strip()
    
    # Check if the item already exists
    if MenuManager.get_by_name(name):
        print(f"An item with the name '{name}' already exists.")
        return
    
    # Validate price input
    while True:
        try:
            price = int(input("Enter the price of the new item: ").strip())
            if price < 0:
                print("Price cannot be negative. Please enter a valid price.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a number for the price.")
    
    # Create and save the new item
    new_item = MenuItem(name, price)
    if new_item.save():
        print(f"Item '{name}' was added successfully.")
    else:
        print("There was an error adding the item to the menu.")

def remove_item_from_menu():
    """Remove an item from the menu"""
    name = input("Enter the name of the item to delete: ").strip()
    
    # Find the item
    item = MenuManager.get_by_name(name)
    
    if item:
        if item.delete():
            print(f"Item '{name}' was deleted successfully.")
        else:
            print("There was an error deleting the item from the menu.")
    else:
        print(f"Item '{name}' not found in the menu.")

def update_item_from_menu():
    """Update an existing menu item"""
    name = input("Enter the name of the item to update: ").strip()
    
    # Find the item
    item = MenuManager.get_by_name(name)
    
    if item:
        new_name = input(f"Enter the new name (current: {item.name}): ").strip()
        if not new_name:
            new_name = item.name
            
        # Validate price input
        while True:
            price_input = input(f"Enter the new price (current: ${item.price}): ").strip()
            if not price_input:
                new_price = item.price
                break
            try:
                new_price = int(price_input)
                if new_price < 0:
                    print("Price cannot be negative. Please enter a valid price.")
                    continue
                break
            except ValueError:
                print("Invalid input. Please enter a number for the price.")
        
        if item.update(new_name, new_price):
            print(f"Item was updated successfully to '{new_name}' with price ${new_price}.")
        else:
            print("There was an error updating the item.")
    else:
        print(f"Item '{name}' not found in the menu.")

def show_restaurant_menu():
    """Display all items in the restaurant menu"""
    items = MenuManager.all_items()
    
    if not items:
        print("\nThe menu is currently empty.")
        return
    
    print("\n===== Restaurant Menu =====")
    print(f"{'Item Name':<30} {'Price ($)':<10}")
    print("-" * 40)
    
    for item in items:
        print(f"{item.name:<30} ${item.price:<10}")
    
    print("-" * 40)
    print(f"Total Items: {len(items)}")

if __name__ == "__main__":
    show_user_menu()