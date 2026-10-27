investimento = float(input("Quanto você investiu? "))
quant_meses = int(input("Por quantos meses esse valor ficou rendendo? "))
rendimento_juros = quant_meses * 0.095
desc_admin = (((investimento + rendimento_juros) * 20) / 100)
valor_final = desc_admin + investimento

print(f"Você investiu R${investimento:.2f}, por {quant_meses} meses, e o rendimento foi de {desc_admin:.2f}, o valor final é de {valor_final:.2f}")
