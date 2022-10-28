var List=['Ahmed',"Alishba",'Afaq',"Hamad","Ali","Obaid"];
console.log("Changing Dinner List By Inviting only two members");
for(let i=List.length-1;i>=2;i--){
    console.log(`Sorry You are not invited!${List[i]}`);
    List.pop();
}
List.map(value=>console.log(`${value}, You are invited on dinner`));


//                          part b
//removing all values
List.pop();
List.pop();
console.log(List);