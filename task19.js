var List=['Ahmed',"Afaq",'obaid'];

List.unshift('Sagheer');
List.splice(List.length/2,0,'Hamad');
List.push('hashmi');

console.log(`Hello all of you are inviting`)

console.log(`The total number of guest invited are : ${List.length}`)