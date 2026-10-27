num1 = int(input("Informe o valor inteiro: "))
num2 = int(input("Informe outro valor inteiro: "))
soma = 0
while num1 <= num2:
    soma += num1
    print(num1, soma)
    num1 += 1