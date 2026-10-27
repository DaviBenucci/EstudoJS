combustivel = int(input("Com qual combustível você irá abastecer \n \n 1 - Gasolina \n 2 - Álcool \n \n"))
litros = float(input("Com quantos litros você irá abastecer? "))

if combustivel == 1:
    if litros <= 20:
        desconto = 0.04
        print(f"Você recebeu um desconto de {desconto * 100}% por litro no seu abastecimento de Gasolina")
    else:
        desconto = 0.06
        print(f"Você recebeu um desconto de {desconto * 100}% por litro no seu abastecimento de Gasolina")
elif combustivel == 2:
    if litros <= 20:
        desconto = 0.03
        print(f"Você recebeu um desconto de {desconto * 100}% por litro no seu abastecimento de Álcool")
    else:
        desconto = 0.05
        print(f"Você recebeu um desconto de {desconto * 100}% por litro no seu abastecimento de Álcool")
else:
    print("Digite um número válido")
