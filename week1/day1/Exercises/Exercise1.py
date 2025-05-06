# 1/
print("Hello world\nHello world\nHello world\nHello world")
# 2
resultat = (99 ** 3) * 8
print(resultat)

# 3
# my_name = "AMARA"  
# nom_utilisateur = input("What's your name ? ")

# if nom_utilisateur.lower() == my_name .lower():
#     print("Wow! We have the same first name, that's awesome! ")
# else:
#     print(f"Delighted {nom_utilisateur} ! My first name is {my_name }.")


# 4
# height = int(input("What is your height in centimeters? "))

# if height > 145:
#     print("You are tall enough to ride the roller coaster! ")
# else:
#     print("Sorry, you need to grow a bit more to ride! ")



# 5
my_fav_numbers = {3, 7, 9, 21, 42}
my_fav_numbers.add(88)
my_fav_numbers.add(13)

my_fav_numbers.pop()

friend_fav_numbers = {5, 14, 22, 33}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


# 6
# No, it is not possible to add elements to a tuple after it's created.
# A tuple in Python is immutable, meaning it cannot be changed after it is created.
# You cannot add, remove, or change elements in a tuple.

# 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print("Number of Apples:", apple_count)

basket.clear()
print("Basket after emptying:", basket)

# 8
sandwich_orders = [
    "Tuna sandwich", 
    "Pastrami sandwich", 
    "Avocado sandwich", 
    "Pastrami sandwich", 
    "Egg sandwich", 
    "Chicken sandwich", 
    "Pastrami sandwich"
]

print("Sorry, we're out of pastrami today.")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"I’m making your {current_sandwich.lower()}...")
    finished_sandwiches.append(current_sandwich)

print("\n All sandwiches made:")
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")
