function show_magicians(m)
    {
        for (const i of m){
            console.log(i)
        }
    }
function makegreat(magicians){
    for(let i=0;i<magicians.length;i++){
        magicians[i]=`THE GREAT ${magicians[i]}`
    }
}
let magicians = ['osama', 'afaq', 'rose']

let newarr=magicians.slice();
makegreat(newarr);

show_magicians(newarr)

//original
show_magicians(magicians)
