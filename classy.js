//This is the code for class functions : 


class Coders {

    //Through constructors we are setting up the fields: 
    constructor(name = null, company = null) {
        this.name = name;
        this.company = company;
    }

    //normal function in a class: 
    getInfo() {
        console.log(`Hey my name is ${this.name} and I created ${this.company}`);
    }
     

}

const n1 = new Coders("Mark", "facebook");
n1.getInfo();
console.log(n1.coders); 