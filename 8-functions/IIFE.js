//somtimes in js we need s function that we only use once and we want 
//it to disappear once it is used (used in async await)

(
    function()
    {
        console.log("this will never run again");
    }
)();
// we dont give function name and wrao it inside paranthesis and then 
// immediatly call it
(
    ()=>console.log("this will also never run again")
)();

