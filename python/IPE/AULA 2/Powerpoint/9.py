# Ficha funcionário

funcionario = input("Qual o nome do funcionário? ")
horas_trabalhadas = float(input("Qual a quant. de horas trabalhadas desse funcionário? "))
dependentes = int(input("Quantos dependentes esse funcionário tem? "))
calculo_dependentes = dependentes * 40
calculo_horas = horas_trabalhadas * 12

salario_bruto = (calculo_horas + calculo_dependentes)
INSS = salario_bruto * 0.08
IR = salario_bruto * 0.05
salario_liquido = (salario_bruto - INSS) - IR

print(f"{funcionario} seu salário bruto é de R${salario_bruto:.2f}, descontando o INSS R${INSS:.2f} e o IR R${IR:.2f} \n o seu salário vai para {salario_liquido:.2f}")
