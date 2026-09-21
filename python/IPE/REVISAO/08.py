count = 1
soma = 0

while count <= 10:
    numero = float(input("informe um número; "))
    soma += numero
    count += 1
print(f"A soma total dos seus números é de {soma:.2f}")