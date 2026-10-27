# Informar os 3 lados de um triângulo

lado1 = float(input("Informe a medida do lado do seu triângulo; "))
lado2 = float(input("Informe a medida do lado do seu triângulo; "))
lado3 = float(input("Informe a medida do lado do seu triângulo; "))

if (lado1 + lado2) > lado3 or (lado1 + lado3) > lado2 or (lado2 + lado3) > lado1:
    if lado1 == lado2 and lado2 == lado3:
        print("ISSO É UM TRIÃNGULO EQUILÁTERO")
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        print("ISSO É UM ISÓCELES")
    else:
        print("ESSE AÍ É UM ESCALENO!")
else:
    print("Tem parada errada aí irmão")

