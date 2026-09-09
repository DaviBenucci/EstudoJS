carro_fabrica = 50000
impostos = 0.45
distribuidor = 0.15


carro_impostos = (carro_fabrica * impostos + carro_fabrica)
carro_distribuidor = (carro_impostos * distribuidor + carro_impostos)

print(f"O valor final desse carro é de {carro_distribuidor}")
