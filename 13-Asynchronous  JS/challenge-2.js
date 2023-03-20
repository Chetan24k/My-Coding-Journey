// let imgContainer=document.querySelector(".images");
// function wait(time)
// {
//     return new Promise(function(resolve,reject)
//     {
//         setTimeout(resolve, time*1000);
//     })
// }
// function createImage(imgPath)
// {
//     return new Promise(function(resolve,reject)
//     {
//        const img=document.createElement('img');
//     //    document.querySelector("img");
//        img.src=imgPath;
//        img.addEventListener("load",function()
//        {
//             imgContainer.append(img);
//             resolve(img);
//        });
//        img.addEventListener("error",function()
//        {
//             reject(new Error("image not found"));
//        });
//     });
    
// }
// let globalImage;
// createImage("img/img-1.jpg").then(function(response)
// {
//     globalImage=response;
//     console.log("image loaded succesfully");
//     return wait(2);
// }).then(function()
// {
//     globalImage.style.display="none";
//     return createImage("img/img-2.jpg");
// }).then(function()
// {
//     globalImage=response;
//     console.log("image loaded succesfully");
//     return wait(2);
// }).then(function()
// {
//     globalImage.style.display="none";
// })
// .catch(function(err)
// {
//     console.error(err);
// })
function wait(time)
{
    return new Promise(function(resolve)
    {
        setTimeout( resolve,time*1000);
    })
}

let imgContainer=document.querySelector(".images");
function createImage(path)
{
    return new Promise(function(resolve,reject)
    {
       let img= document.createElement("img");
       img.src=path;
       img.addEventListener("load",function()
       {
            imgContainer.append(img);
            resolve(img);
       });
       img.addEventListener("error",function()
       {
        reject("image not found");
       })
    })   
}
let currentImage;
createImage("img/img-2.jpg").then(function(response)
{
    console.log("image loaded succesfully");
    currentImage=response;
    return wait(2);
}).then(function(response)
{
    currentImage.style.display="none";
})