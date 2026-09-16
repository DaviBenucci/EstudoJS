funcionario = input("Informe o nome do funcionário; ")
salario = float(input("Informe o seu salário atual; "))

if salario < 1500:
    reaj = salario * 1.20
    print(f"{funcionario} o seu salário antes do reajuste era de {salario:.2f} e agora reajustado será de {reaj:.2f}")
elif salario < 2800:
    reaj = salario * 1.15
    print(f"{funcionario} o seu salário antes do reajuste era de {salario:.2f} e agora reajustado será de {reaj:.2f}")
elif salario < 5000:
    reaj = salario * 1.10
    print(f"{funcionario} o seu salário antes do reajuste era de {salario:.2f} e agora reajustado será de {reaj:.2f}")
else:
    reaj = salario * 1.05
    print(f"{funcionario} o seu salário antes do reajuste era de {salario:.2f} e agora reajustado será de {reaj:.2f}")

