# Desenvolver um programa em Python que mostre se um número é primo ou não.
num = int(input("Digite um número inteiro. "))
count = 2
flag_primo = True

while count < num - 1 / 2:
    if num % count == 0:
        flag_primo = False
        while flag_primo == False:
            print("Não é um número primo")
            num = int(input("Digite um outro número inteiro; "))
            if num % count != 0:
                flag_primo = True
    count += 1

print(f"{num} é um número primo")