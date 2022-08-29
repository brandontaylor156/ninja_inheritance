class Ninja {
    constructor(name, health=10, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.constructor.name);
    }

    showStats(){
        console.log(this.name, this.health, this.speed, this.strength);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake(), console.log("do your homework");
    }

    showStats(){
        super.showStats(), console.log(this.wisdom);
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

const sensei1 = new Sensei("Master Splinter");
//sensei1.speakWisdom();
sensei1.showStats();
sensei1.sayName();
