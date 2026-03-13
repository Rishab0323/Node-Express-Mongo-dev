"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "R", age: 24 }, { name: "M", age: 25 });
console.log(age);
const displayUser = (user) => {
    console.log(`Name : ${user.name}, Age : ${user.age}`);
};
displayUser({ name: "R", age: 24 });
//# sourceMappingURL=index.js.map