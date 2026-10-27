apple = int(input("Quantas maçãs vocẽ comprou? "))

if apple < 12:
    valor = apple * 1.30
else:
    valor = apple * 1.00

print(f"Sua compra final foi de R${valor:.2f} em {apple} Maçãs")