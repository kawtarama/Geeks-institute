# 1
# number = int(input("Entrez un nombre : "))
# length = int(input("Entrez la longueur souhaitée : "))


# multiples = [number * i for i in range(1, length + 1)]

# print(multiples)
# 2

word = input("Enter a word: ")


result = ""
for i in range(len(word)):
    if i == 0 or word[i] != word[i - 1]:
        result += word[i]

print(result)

