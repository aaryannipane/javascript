// FUNCTION RETURNING PROMISE
const getName = (name)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("inside getName function");
            resolve(name)
        }, 5000)
    })
}

const getHobbies = (nm)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("inside getHobbies function");
            let data = ['cricket','football'];
            resolve(data);
        }, 1000)
    })
}


// async function for consuming promise in another way than then method
async function showHobby(){
    try{
        const nm = await getName('Aryan');
        const hobby = await getHobbies(nm);
    
        console.log(hobby);
    }
    catch{
        console.log("could not fetch promise");
    }
}


showHobby();