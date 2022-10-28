let Name1="osama";
let Name2="SAGHEER";
let Name3="OSAMA HASHMI";
console.log("Upercase:   "+Name1.toUpperCase());
console.log("Lowercase:  "+Name2.toLowerCase());
const newStr = Name3.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log("Titlecase:  "+newStr);