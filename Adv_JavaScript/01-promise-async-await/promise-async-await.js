// you should know first asynchronus function/method

// basic example const
// promiseObj = new Promise((resolve, reject) => {
// //   let fetchData = true;
//   let fetchData = false;
//   if (fetchData == true) {
//     resolve("Request Success");
//   } else {
//     reject("Request Rejected");
//   }
// }).then(
//   (value) => {
//     console.log(value);
//   },
// //   (err) => {
// //     console.log(err);
// //   }
// ).catch(
//     (err)=>{console.log(err)}
// ).finally(
//     ()=>{
//         console.log("i will run always");
//     }
// )



// // chaining

// const promiseObj2 = new Promise((resolve, reject)=>{
//     let num = 10;
//     resolve(num);
// }).then(
//     (value)=>{
//         console.log(value);
//         return value + 10;
//     }
// ).then(
//     (value)=>{console.log(value)}
// )


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


getName('Aryan').then(
    (name)=>{
        console.log(name);
        return getHobbies(name)
    }
).then(
    (hobby)=>{
        console.log(hobby);
    }
)