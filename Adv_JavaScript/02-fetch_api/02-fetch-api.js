// FETCH DATA FROM API 

document.getElementById('btnApi').addEventListener('click', makerequest);


// promise then | single data 
// function makerequest(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then(
//         (res)=>{
//             if(!res.ok){
//                 throw Error(res.statusText)
//             }
//             return res.json()
//         }
//     ).then(
//         (json)=>{
//             console.log(json.id);
//             console.log(json.title);
//             console.log(json.body);
//         }
//     ).catch(
//         (err)=>{
//             console.log(err);
//         }
//     )

// }

// promise then | multiple data 
function makerequest(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(
        (res)=>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }
    ).then(
        (json)=>{
            // use foreach loop to retrive multiple json data
            json.forEach(element => {
                console.log(element.id);
            });
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )

}

// async await | single data 
// async function makerequest(){
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         if(!res.ok){
//             throw Error(res.statusText);
//         }

//         const json = await res.json()
//         console.log(json.title);
//     }
//     catch(e){
            // console.log(e);
//     }
// }