eleitores = int(input("Escreva o número total de eleitores; "))
vt_nulo = int(input("Quantos votos nulos? "))
vt_branco = int(input("Quantos votos brancos? "))
vt_val = int(input("quantos votos válidos? "))

percent_nulo = (vt_nulo * 100) / eleitores
percent_branco = (vt_branco * 100) / eleitores
percent_val = (vt_val * 100) / eleitores

print(f"O percentual de votos nulos é de {percent_nulo:.2f}% \n")
print(f"O percentual de votos brancos é de {percent_branco:.2f}% \n")
print(f"O percentual de votos válidos é de {percent_val:.2f}%")
