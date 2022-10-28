
var List=['Ahmed',"Afaq",'obaid'];
console.log("Changing Dinner List By Removing One Member");
for(let i=0;i<List.length;i++){
    if(List[i]==='obaid'){
        List[i]='Alishba';
    }
}


console.log("I just found a bigger dinner table, so now more space is available. ")
List.unshift('Sagheer');
List.splice(List.length/2,0,'Hamad');
List.push('hashmi');
List.map(value=>console.log(`${value}, You are invited on dinner`));