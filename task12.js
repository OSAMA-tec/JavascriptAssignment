var List=['Ahmed',"Afaq",'obaid'];
console.log("Changing Dinner List By Removing One Member");
List.push("Alishba");
List.map(value=>value!='obaid'&&console.log(`${value}, You are invited on dinner`));