//• Tests for equality and inequality with strings


let name1='osama';
let name2='ahmed';
console.log("Name Greater is :"+name1>name2?name1:name2)

let name3='alishba';
let name4='osama';
console.log("Name Greater is :"+name3>name4?name3:name4)


// • Tests using the lower case function

let string1='hello world!beautiful day';
let string2='HELLO HOW ARE YOU';
console.log("Name Greater is :"+string1>string2.toLowerCase()?string1:string2);



// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


let age=20;
console.log(age>18?"Adult":"Child");

let percentage=87;
console.log(percentage>60?"Pass":"Fail")

let phone=0312;
console.log(phone===0312?"Zong":"Another")

// • Tests using "and" and "or" operators
let marks =65;
console.log(marks>50&&marks<70?"Grade B":"Grade C");
console.log(marks>70||marks<90?"Grade A":"Grade D");

// • Test whether an item is in a array

const arr=['osama','ahmed'];
for(let i=0;i<arr.length;i++){
    if(arr[i]==='osama'){
        console.log("Yes Exist");
    }
}
// • Test whether an item is not in a array

const arr1=['osama','ahmed'];
for(let i=0;i<arr.length;i++){
    if(arr[i]!='ali'){
        console.log("Not Exist");
        break;
    }
}