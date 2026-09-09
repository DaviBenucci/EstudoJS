nome_funcionario = input("Qual é o seu nome? ")
idade_funcionario = int(input("Qual a sua idade? "))
cargo_funcionario = input("Qual é o seu cargo na empresa? ")
salario_bruto = float(input("Qual o seu salário Bruto? "))

salario_reajustado = (salario_bruto * 0.18) + salario_bruto
print(f"A) \n Com o reajuste o seu salário bruto reajustado foi para {salario_reajustado} \n")

salario_gratificado = (salario_reajustado * 0.20) + salario_reajustado
print(f"B) \n Seu salário bruto gratificado será de {salario_gratificado} \n")

descontos = salario_reajustado * 0.15
salario_liquido = salario_gratificado - descontos

print(f"{nome_funcionario}, de idade {idade_funcionario} com o cargo {cargo_funcionario} \n \n o seu salário bruto é de R${salario_gratificado}, já o seu salário liquido é de R${salario_liquido}")

