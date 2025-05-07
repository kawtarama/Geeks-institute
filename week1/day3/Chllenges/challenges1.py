class Farm:
    def __init__(self, farm_name): 
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        result = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            result += f"{animal} : {count}\n"
        result += "\n    E-I-E-I-0!"
        return result

    def get_animal_types(self):
        return list(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        plural_animals = []
        for animal in animal_types:
            if self.animals[animal] > 1:
                plural_animals.append(animal + "s")
            else:
                plural_animals.append(animal)

        if len(plural_animals) == 1:
            animal_str = plural_animals[0]
        else:
            animal_str = ", ".join(plural_animals[:-1]) + " and " + plural_animals[-1]
        return f"{self.name}'s farm has {animal_str}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print("\n" + macdonald.get_short_info())
