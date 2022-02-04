console.log('hello world');

function func1(){
    setTimeout(()=>console.log('inside func1'), 2000);
}

func1();