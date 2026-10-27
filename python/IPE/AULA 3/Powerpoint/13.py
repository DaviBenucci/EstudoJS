num1 = 2
num2 = 8
num3 = 5

print(num1, num2, num3)

if num2 > num1:
    temp = num2
    num2 = num1
    num1 = temp

print(num1, num2, num3)

if num3 > num1:
    temp = num1
    num1 = num3
    num3 = temp

print(num1, num2, num3)

if num3 > num2:
    temp = num3   
    num3 = num2
    num2 = temp

print(num1, num2, num3)