ano = int(input("Digite um ano e eu informarei se esse ano é bissexto ou não; "))

if ano % 4 == 0 and ano % 100 != 0 or ano % 400 == 0:
    print(f"O ano {ano} é um ano bissexto")
else:
    print(f"O ano {ano} não é bissexto")