'use strict';

let chetan={
    fname:"chetan"
}
let newck=chetan;
newck={}
console.log(chetan);
console.log(newck);


function ok()
{function not()
{
    console.log(this);
}
not();

}
ok();