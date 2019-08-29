// This is the code for functions in JS: 

let Code = function () {

    //this - keyword represents the current function: 
    //so this.arr belongs to the function - Code.
    this.arr = [];

    this.addElement = function (e) {
        this.arr.push(e);
    }

    this.rarray = function () {
        return this.arr;
    }

    this.code = "Hackers";

}

const n1 = new Code();

n1.addElement("mark");
n1.addElement("steve");

console.log(n1.rarray());
console.log(n1.code);
