const Name=['osama','admin','ahmed','afaq','obaid'];

const check=()=>{
    Name.pop();
    Name.pop();
    Name.pop();
    Name.pop();
    Name.pop();
    if(Name.length===0)
    {
        console.log(`The List is Empty!\nWe need more users`)
    }
}
check();