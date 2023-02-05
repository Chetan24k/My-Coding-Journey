(function () { 
    const header = document.querySelector('h1'); 
    header.style.color = 'red';
    document.querySelector("body").addEventListener("click",function()
    {
        header.style.color="blue";
    }) 
  })();
  //as addEventListener is innerfunction of the () anonymous function
  //and it is attached to body element it still can be called even after 
  //anonymous function ends but whenever header will be clicked eventListener will still be
  //called and it has closure of the header element so it can access and change it