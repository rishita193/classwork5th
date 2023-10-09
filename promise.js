let x=new Promise(function(resolve, reject) {
    const num=Math.floor(Math.random()*10)
    console.log(num);
    if(num%2===0)
    {
        resolve();
    }
    else
    {
        reject();
    }
})
x
.then(()=>{
    console.log('Promise get fulfilled.....')
})
.catch(()=>{
    console.log('err');
})
// promise{<rejected>:undefined}