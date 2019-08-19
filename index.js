
//Looping through hash: 
hash = {

    Mark: "Facebook",
    Steve: "Apple",
    Bill: "Microsoft"

}

//To get only the Keys : 
// to get only the keys in an object you use something called Object.keys: 

const keys = Object.keys(hash);

console.log(keys);

//To get only the values of the object: 
//You use something called Obejct.values(): 

const values = Object.values(hash);

console.log(values);

//To get both the keys and the values you use something called Object.entries; 

const enter = Object.entries(hash);

console.log(enter);


//To loop through the keys and values in an Object: 

for ([k, v] of enter) {
    console.log(`${k} created the company ${v}`);
}

//Convert hashes into an array: 

console.log(hash);

let arr = [];

for ([key, value] of Object.entries(hash)) {

    arr.push(key)

}

console.log(arr);
