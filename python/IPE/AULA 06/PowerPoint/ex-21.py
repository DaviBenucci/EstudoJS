import random

num = random.randint(-100, 100)
maior = num
menor = num

for i in range(0,5,1):
    num = random.randint(-100, 100)
    if num > maior:
        maior = num
    elif num < menor:
        menor = num
    print(num)

print(f"O maior número é {maior}, e o menor número é {menor}")