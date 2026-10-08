nota = float(input("Qual foi a sua nota? "))

while nota < 0 or nota > 10:
    print(f"Nota inválida! ({nota}) Digite Novamente!")
    nota = float(input("Coloque a sua nota corretamente; "))

print(f"Sua nota foi de {nota}")
