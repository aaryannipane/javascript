document.getElementById('btnForm').addEventListener('click', makerequest)


function makerequest(e){
    e.preventDefault()
    let form = document.getElementById('form')
    let username = form.username.value;
    let job = form.job.value;

    // JSON.stringify
    // converts object to json data

    const myInit = {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({name:username, job:job})
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