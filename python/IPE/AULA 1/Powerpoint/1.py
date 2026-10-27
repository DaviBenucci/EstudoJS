aluno = input("Escreva o seu nome: ")
prova1 = float(input("Escreva sua nota da 1° Prova do semestre; "))
prova2 = float(input("Escreva sua nota da 2° Prova do semestre; "))
prova3 = float(input("Escreva sua nota da 3° Prova do semestre;"))
resultado = (prova1 + prova2 + prova3) / 3

print(f"{aluno} a sua nota final foi {resultado:.2f}")
