num_int = int(input("informe um número inteiro; "))

if num_int % 3 == 0 and num_int % 5 != 0:
    print(f"O número {num_int} é divisível por 3 mas não é divisível por 5")
elif num_int % 5 == 0 and num_int % 3 != 0:
    print(f"O número {num_int} é divisível por 3 mas não é divisível por 5")
else:
    print(f"O número {num_int} não é divisível nem por 5 e nem por 3")