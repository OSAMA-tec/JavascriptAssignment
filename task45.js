const car=(manufacturer,model,...Option)=>{
    return Carobj={
        'manufacturer':manufacturer,
        'model':model,
        'Name':Option.Name,
        'color':Option.color,
    }
    
    
}


let audi=car('Audi','2022',Name='audi E-tron',color='white');
let bmw=car('BMW','2020',Name='BMW M5',color='black');


console.log(audi);
console.log(bmw);