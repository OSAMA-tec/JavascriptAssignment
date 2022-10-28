let current_users=['osama','ahmed','afaq','alishba','obaid'];
let new_users=['osama','ahmed','john','sagheer','watson'];


for(const i of current_users){
    if(new_users.find(value =>  value.toLowerCase()===i.toLowerCase())){
        console.log(`Username ${i} already exist,Kindly Change username`)
    }
    else{
        console.log(`Username ${i} created Successfully`)
    }
}
