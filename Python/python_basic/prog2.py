#loop 
# # num = int(input("enter any number "))
while (num < 10):
    print(num)
    num = num + 1

print("num val is ",num)

#for loop
arr = [1,2,4,5,7,8]
for i in arr:
    print(i)

for i in range(1,6):
    
    for j in range(i):
        print('*',end=' ')
    print()

for i in range(1,6):
    
    for j in range(1,i):
        print(j,end=' ')   
    print()
    if i == 3:
            break

def sum(int_x,float_y):
    print('the sum of int & float value',int_x + float_y )

sum(float_y=3,int_x=2)  #can use argument name to assign value 

import re

str1 = "she sell friuts"
pat = "sell"
if re.match(pat,str1):
    print("string is found & is",pat)
print("becuse match fun find only at beginning ")

if re.search(pat,str1):
    print("search fun is similar ")
