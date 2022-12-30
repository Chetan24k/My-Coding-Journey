const a="Chetan";
function first()
{
    const b="hello";
    second();

    function second()
    {
        const c="hii";
        third();
    }
}
function third()
{
    const d="hey";
    console.log(d+c+b+a);
}
first();

/*o.p> here c and b will give referance error even though third() is called
from body of function second() but third() is not inside the second nor inside the 
first 
 
*/
