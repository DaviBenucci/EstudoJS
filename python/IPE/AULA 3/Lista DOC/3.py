num = int(input("Informe um número; "))

if num > 0:
    raiz = num ** 0.5
    print(f"A raiz do número positivo {num} é igual a {raiz:.2f}")
else:
    print("Esse número é inválido")
