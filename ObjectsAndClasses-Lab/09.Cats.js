function cats(input){
    class Cat {
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        meoew(){console.log(`${this.name}, age ${this.age} says Meow`)}
    }

    let catList = {};
    for (const line of input) {
        let [name, age] = line.split(' ');
        let cat = new Cat(name, age);
        cat.meoew();
    }
}

cats(['Mellow 2', 'Tom 5']
)