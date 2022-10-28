function make_sandwich(items){
     console.log("Start working on it");
    for (const i of items){
        console.log(`Adding  ${i}  to your sandwich.`)
        console.log("Sandwich Ready")
    } 
    console.log(`\n`);
}
const arr1=['roast', 'cheese','club ']
const arr2=['turkey', 'vegi']
const arr3=['butter', 'jam']
make_sandwich(arr1);
make_sandwich(arr2)
make_sandwich(arr3)