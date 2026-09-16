num = int(input("Informe um número: "))
digit = num
fatorial = 1

while num > 0 :
   fatorial *= num
   num -= 1
print(f"O fatorial de {digit} é {fatorial}")

acum = 1
while acum <= num:
    fatorial *= acum
    acum += 1

print(fatorial)
