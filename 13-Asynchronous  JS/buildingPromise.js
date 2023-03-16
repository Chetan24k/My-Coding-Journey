let newProm=new Promise(function(resolve,reject)
    {
        console.log("draw started");
        setTimeout(function()
        {
            if(Math.random()>0.5)
            {
                resolve("you won🤹‍♀️");
            }
            else
            {
                reject("you lost🎈");
            }
        },3000);
    }
    
)

// newProm.then(function(response)
// {
//    return newProm()
// })
// .catch(function(err)
// {
//     console.error(err);
// })

let makeWait=function(time)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve,time*1000)
    })

}
makeWait(1).then(function()
{
    console.log("hello");
    return makeWait(1);
}).then(()=>console.log("waitning 2 secs"))
