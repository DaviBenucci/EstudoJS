empregado_cod = int(input("Qual o código do empregado? "))
ano_nascimento = int(input("Qual ano de nascimento? "))
ano_ingresso = int(input("Qual ano de ingresso na empresa? "))

norma_idade = 2026 - ano_nascimento
norma_ingresso = 2026 - ano_ingresso

if norma_idade >= 65 or norma_ingresso >= 30:
     print(f"Empregado: {empregado_cod} \n tempo de trabalho: {norma_ingresso} \n tempo de vida: {norma_idade} \n **Requerer aposentadoria**")
else:
    if norma_idade >= 60 and norma_ingresso >= 25:
     print(f"Empregado: {empregado_cod} \n tempo de trabalho: {norma_ingresso} \n tempo de vida: {norma_idade} \n **Requerer aposentadoria**")
    else:
        print(f"Empregado: {empregado_cod} \n tempo de trabalho: {norma_ingresso} \n tempo de vida: {norma_idade} \n **não requerer**")
