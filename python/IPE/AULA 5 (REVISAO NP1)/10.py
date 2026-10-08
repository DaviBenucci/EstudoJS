count = 1
soma = 0
maior = 0
while count <= 15:
    cod = int(input("Digite o código do produto; "))
    preco = float(input("Digite o preço do produto; "))
    soma += preco
    if maior < preco:
        maior = preco
    count += 1
count = 15
media = soma / count
print(f"a media aritmética é de {media}, e o maior valor é {maior}")