let detail={
    myName:"chetan",
    rollNo:21
}

let grade=8;
let changeGrade=function(grade,studentDetail)
{
    studentDetail.rollNo=22;
    grade=9;
    console.log(grade);
}
changeGrade(grade,detail);
console.log("grade "+grade);
console.log(detail);
//as detail is an object and it is if referance type so
//only address of the detail object is passed and changes made to 
//student details is also relflected in detail object
