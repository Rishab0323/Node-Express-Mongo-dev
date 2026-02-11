# number in python 
x = 2  #int
a = 2.3333 #float
# b =  2 + 4i  complex num in py

print( "integer no" ,x)

#escape sequence 
print('what is \'s is you name')

#multple assignment
a,b,c = 1,3.12,120
print(a,b,c)
print(x//b) #floor division

#membership operator
nums = [1,2,3,4,]
r = 3
q = 3
s = 5
# print(r not in nums)
# print(s not in nums)

#identitiy operator   checks both var points to same memory location
print(s is not nums) 
print( r is nums)
print(q is r)

#string conaact and mutliple str
name = "python"
print(name * 3 )
print(name +"is very easy for beginner")

#string slicing 0 based index
print(name[1])  #0 or 1 gives first letter
print(name[-3:]) #give last three letter
print(name[3:]) #it start fro, 3 letter 
print(name[:5])  #until 5 it should print

#control statement
num1 = 21
num2 = 17

#if statement
if num1 > num2:
    print("largest number is " +str(num1))
print("the largest num is " +str(num2) )

#if else statement
if(num1 + 0) != (num2 + 3):
    print("equation satisfied")
else:
    print("eqation not equal")
print("the equation is not fit")


#if elif else stmt     
if(num1 < 10):
    print("num from 10-15")
elif(num1 > 21):
    print("num from 14-16")
else:
    print("num from 17")

