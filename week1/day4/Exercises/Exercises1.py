# 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def __init__(self, name, age, eye_color="blue"): 
        super().__init__(name, age)
        self.eye_color = eye_color

    def sing(self, sounds):
        return f'{sounds}'


bengal_cat = Bengal("poki", 3)
chartreux_cat = Chartreux("Shadow", 4)
siamese_cat = Siamese("Luna", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]


sara_pets = Pets(all_cats)


sara_pets.walk()
# 2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return "It's a draw!"
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 30)

print(dog1.bark())             
print(dog2.run_speed())         
print(dog3.fight(dog1))         
print(dog2.fight(dog3))       


# 3
class dog :
    def __init__(self,name, age, weight):
        self.name = name    
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return self.weight / self.age * 10
    def fight(self, other_dog):
         my_power = self.run_speed() * self.weight
         opponent_power = other_dog.run_speed() * other_dog.weight
         if my_power > opponent_power:
            return f"{self.name} wins!"
         elif my_power < opponent_power:
            return f"{other_dog.name} wins!"
         else:
            return "It's a draw!"
         

import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        all_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(all_names)} all play together!")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet.")
dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 12)
dog3 = PetDog("Max", 1, 8)

dog1.train()                 
dog1.play(dog2, dog3)        
dog1.do_a_trick()    

dog2.do_a_trick()


# # 4

class Person:
    def __init__(self, first_name, age ):
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    def is_18(self):
        if self.age >=18:
            return True
            

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = [] 
    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)
    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print ("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else :
                     print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found in the family.")  
        def family_presentation(self):
           print(f"Family name: {self.last_name}")
        for member in self.members:
            print(f"- {member.first_name}, Age: {member.age}")
            