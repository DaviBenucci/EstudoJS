MG = 0.07
SP = 0.12
RJ = 0.15
MS = 0.08

prod = float(input("Informe o valor do produto que você deseja vender; "))
estado = input("Informe o estado ao qual você irá vender esse produto; ")

if estado == "São Paulo" or estado == "SP" or estado == "Sp" or estado == "sp" or estado == "são paulo":
    imposto = prod * SP
    valor_atual = prod + imposto
    print(f"No estado de São Paulo o imposto em cima desse produto será de {imposto:.2f}, e juntamente com o valor do produto ficará {valor_atual:.2f}")
elif estado == "Minas Gerais" or estado == "MG" or estado == "Mg" or estado == "mg" or estado == "minas gerais":
    imposto = prod * MG
    valor_atual = prod + imposto
    print(f"No estado de Minas Gerais o imposto em cima desse produto será de {imposto:.2f}, e juntamente com o valor do produto ficará {valor_atual:.2f}")
elif estado == "Rio de Janeiro" or estado == "RJ" or estado == "Rj" or estado == "rj" or estado == "rio de janeiro":
    imposto = prod * RJ
    valor_atual = prod + imposto
    print(f"No estado do Rio de Janeiro o imposto em cima desse produto será de {imposto:.2f}, e juntamente com o valor do produto ficará {valor_atual:.2f}")
elif estado == "Mato Grosso do Sul" or estado == "MS" or estado == "Ms" or estado == "ms" or estado == "mato grosso do sul":
    imposto = prod * MS
    valor_atual = prod + imposto
    print(f"No estado de Mato Grosso do Sul o imposto em cima desse produto será de {imposto:.2f}, e juntamente com o valor do produto ficará {valor_atual:.2f}")
else:
    print("Informe um estado Válido, Entre SP, MG, RJ e MS")
