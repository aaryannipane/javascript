const subbtn = document.getElementById('btn')
subbtn.addEventListener('click', makerequest)


// FETCH DATA FROM TEXT FILE USING PROMISE THEN
// function makerequest(){
//     console.log('Hello');
//     const promiseObj = fetch('data.txt');
//     promiseObj.then((res)=>{
//         // error handling for fetch api 
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.text();
//     }).then((data)=>{
//         const ele = document.createElement('h2')
//         ele.textContent = data;
//         document.body.appendChild(ele);
//         console.log(data);
//     }).catch((err)=>{console.log(err)})
// }



// FETCH DATA FROM TEXT FILE USING ASYNC AWAIT
// async function makerequest(){
//     try{
//         const res = await fetch('data1.txt');
//         if(!res.ok){
//             throw Error(res.statusText);
//         }
//         const data = await res.text();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }



// FETCH DATA FROM JSON FILE USING PROMISE THEN
// function makerequest(){
//     console.log('Hello');
//     const promiseObj = fetch('data.json');
//     promiseObj.then((res)=>{
//         // error handling for fetch api 
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res);

//         // for json
//         return res.json();
        
//     }).then((data)=>{
//         const ele = document.createElement('h2')
//         ele.textContent = data.name + " " + data.age;
//         document.body.appendChild(ele);
//         console.log(data);
//     }).catch((err)=>{console.log(err)})
// }

// FETCH DATA FROM JSON FILE USING AYNC AWAIT
async function makerequest(){
    try{
        const res = await fetch('data.json')
        console.log(res)
        if(!res.ok){
            throw Error(res.statusText)
        }

        const obj = await res.json()

        console.log(obj)
    }
    catch(err){
        console.log(err);
    }
}