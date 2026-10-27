num_principal = int(input("Informe um número inteiro de até 3 algarismos; "))

num_cent = int(num_principal / 100)
num_deze = int((num_principal % 100) / 10)
num_unit = int(((num_principal % 100) % 10) / 1)

print(f"Os seus algarismos são {num_cent, num_deze, num_unit} \n já a soma deles é ({num_cent + num_deze + num_unit})")

