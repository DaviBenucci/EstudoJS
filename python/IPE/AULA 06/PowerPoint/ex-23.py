import random

grupoF = 0
grupoM = 0
somaM = 0
somaF = 0
somaG = 0
maior = 0
idade = 0
for i in range(10):
     count = 1
     while count <= 1:
          sexo = input("Digite o seu sexo, digitando M ou F; ")
          if sexo == "M" or sexo == "m":
               idade = random.randint(0, 110)
               somaM += idade
               grupoM += 1
          elif sexo == "F" or sexo == "f":
               idade = random.randint(0, 110)
               somaF += idade
               grupoF += 1
          else:
               print("Digite corretamente o que se pede")
               count -= 1
          count += 1
     if maior < idade:
          maior = idade
     somaG += idade
     print(idade)
print(f"A idade média das mulheres é {somaF / grupoF:.2f} \n a idade média dos homens é {somaM / grupoM:.2f} \n e a média de idade do grupo é {somaG / 10:.2f}, já a maior idade do grupo é {maior:.2f}")
