class Person {

    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    
    getGretting(){
        // return 'Hi, i am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

class Student extends Person {

    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description = description += ` Their major is ${this.major}.`;
        }
        return description;
    }

}

class Traveler extends Person {

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting(){
        let home = super.getGretting();
            if(this.homeLocation){
                home += ` I'm visiting from ${this.homeLocation}`;
            }
        return home;
    }

}

const me = new Traveler('Ghalib', 20, 'Malang');
console.log(me.getGretting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());