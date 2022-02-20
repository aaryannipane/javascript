document.getElementById('btnPost').addEventListener('click', makerequest)


// promise then
function makerequest(){
    const myInit = {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:'{"name":"Aryan", "job":"Web Dev"}'
    }
    fetch('https://reqres.in/api/users', myInit).then(
        (res)=>{
            if(!res.ok){
                throw Error(res.statusText)
            }

            return res.json()
        }

    ).then(
        (data)=>{
            console.log(data);
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}