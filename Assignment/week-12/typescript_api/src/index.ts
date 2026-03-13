interface User{
    name : String,
    age : number
}

function sumOfAge(user1 : User, user2 : User){
    return user1.age + user2.age
}

const age = sumOfAge({name : "R",age : 24},{name : "M",age : 25})
console.log(age)

type UpdateProps = Pick<User,"name"|"age">

const displayUser = (user :UpdateProps) =>{
    console.log(`Name : ${user.name}, Age : ${user.age}`)
}

displayUser({name : "R",age : 24})