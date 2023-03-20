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
function wait(time)
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(resolve,time*1000);
    })
}
let currentImage;
async function loadNPause(path)
{
    try
    {
        let response=await createImage(path);
        console.log("image 1 loaded succesfully");
        await wait(2);
        response.style.display="none";
        response=await createImage("img/img-2.jpg");
        console.log("image 2 loaded succesfully");
        await wait(2);
        response.style.display="none";
        response=await createImage("img/img-3.jpg");
    }
    catch(error)
    {
        console.log(error.message);
    }
}
// loadNPause("img/img-1.jpg");

async function loadAll(...imgArr)
{
    try
    {
      let res=  imgArr.map(async function(path)
      {
        createImage(path);
      });
      console.log(res);
      let data=await Promise.all(res);
      console.log(data);
      data.forEach(Element=>Element.classList.add("parallel"))
    }
    catch(error)
    {
        console.log(error);
    }
}
loadAll("img/img-1.jpg","img/img-2.jpg","img/img-3.jpg");
