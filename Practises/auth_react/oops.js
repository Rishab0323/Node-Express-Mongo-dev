class Animal{
    constructor(name,legCount,speak){
        this.name = name;
        this.legCount = legCount;
        this.speak = speak;
    }

    static type(){
        console.log("Animal")
    }

    speak(){
        console.log("hi there " +this.speak);
    }
}

// console.log(Animal.speak());
let dog = new Animal("dog",4,"bhow bhow"); //creating an object

let cat = new Animal("cat",5,"meow meow");
// cat.speak()