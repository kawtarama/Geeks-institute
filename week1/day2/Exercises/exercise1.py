# 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]


# result = dict(zip(keys, values))

# print(result)

# 2
# family = {"rick": 42, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0

# for name, age in family.items():
#     if age < 3:
#         price = 0
#     elif 3 <= age <= 12:
#         price = 10
#     else:
#         price = 15
#     print(f"{name.capitalize()} has to pay ${price}")
#     total_cost += price

# print(f"Total cost for the family is: ${total_cost}")

# 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
    del brand["creation_date"]
    print(brand["international_competitors"][-1])
    print(brand["major_color"]["US"])
    print(len(brand)) 
    print(brand.keys())
    more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
    brand.update(more_on_zara)
    print(brand["number_stores"]) 

    # 4


def describe_city(city, country="Morocco"):
    print(f"{city} is in {country}.")


describe_city("Casablanca")
describe_city("Reykjavik", "Iceland")
describe_city("Tokyo", "Japan")
 # 5

import random

def guess_number(user_number):
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return

    random_number = random.randint(1, 100)

    if user_number == random_number:
        print(" Success! You guessed the number!")
    else:
        print(" Fail! Try again.")
        print(f"Your number: {user_number}")
        print(f"Random number: {random_number}")


user_input = int(input("Enter a number between 1 and 100: "))
guess_number(user_input)
# # 6


def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")


make_shirt()  
make_shirt("Medium")  
make_shirt("Small", "Code is life!")  


make_shirt(text="Keep calm and code on", size="XL")
# # 7
import random


def get_random_temp(season):
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(10, 25), 1)
    elif season == "summer":
        return round(random.uniform(20, 40), 1)
    elif season == "autumn" or season == "fall":
        return round(random.uniform(5, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1)  # Default case


def main():
    month = int(input("Enter the number of the month (1-12): "))
    

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp}°C.")

    
    if temp < 0:
        print("Brrr, that's freezing! Wear extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("Nice and mild! A sweater should do.")
    elif 24 <= temp <= 32:
        print("Warm day! Stay hydrated.")
    elif temp > 32:
        print("Hot! Don’t forget sunscreen and drink water.")

main()
 # 8
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz():
    correct = 0
    wrong_answers = []

    for item in data:
        user_ans = input(item["question"] + " ")
        if user_ans.strip().lower() == item["answer"].lower():
            print("Correct!")
            correct += 1
        else:
            print("Incorrect.")
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_ans,
                "correct_answer": item["answer"]
            })

    incorrect = len(data) - correct
    print(f"\nResults: {correct} correct, {incorrect} incorrect.")

    if wrong_answers:
        print("\nYou answered these questions incorrectly:")
        for wrong in wrong_answers:
            print(f"Q: {wrong['question']}")
            print(f"Your answer: {wrong['your_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}\n")

    if incorrect > 3:
        play_again = input("You had more than 3 wrong answers. Would you like to try again? (yes/no): ")
        if play_again.lower() == "yes":
            run_quiz()

run_quiz()
