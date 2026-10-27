num = int(input("Aloque um número inteiro! "))
menor = num
maior = num
for i in range(4):
    num = int(input("Aloque um número inteiro! "))
    if num < menor:
        menor = num
    if num > maior:
        maior = num
print(f"O número maior é {maior}, \n o número menor é {menor}")
