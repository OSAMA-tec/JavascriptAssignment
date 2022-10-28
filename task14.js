var List=['Ahmed',"Afaq",'obaid'];
console.log("Changing Dinner List By Removing One Member");
for(let i=0;i<List.length;i++){
    if(List[i]==='obaid'){
        List[i]='Alishba';
    }
}
List.map(value=>value!='obaid'&&console.log(`${value}, You are still invited on dinner`));
