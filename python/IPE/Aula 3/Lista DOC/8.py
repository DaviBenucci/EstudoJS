Km = float(input("informe a distância que você andou de carro: "))

quant_litros = float(input("Agora informe a quantidade de litros que foram gastos: "))

consumo = Km / quant_litros

if consumo < 8:
    print("Troque de Carro AGORA!")
elif consumo > 8 and consumo < 14:
    print("Ta economizando")
elif consumo > 12:
    print("Super Economizando")