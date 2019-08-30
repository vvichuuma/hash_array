var h = {
    name: "mark", 
    age: 31, 
    code: "facebook",
    nationality: "american"
}

//Looping through hash: 

for(k in h){
  console.log(`${k} : ${h[k]}`);
}

//Checking if a value exists in the hash: 

for(k in h){
    if(k === "age"){
        console.log("Code works!!");
    }
}

//Check if the Key exists in the hash: 

if("age" in h){
    console.log("Yes it is !!");
}