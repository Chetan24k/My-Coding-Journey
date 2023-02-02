let displayResults=function(type="array")
{
 if(type=="array")
 {
    console.log(this.answers);
 }
 else
 {
    console.log("poll results are",... this.answers);
 }
};

const poll = 
{ 
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"], 
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0), 
    registerNewAnswer:function()
    {
    let ans=Number( prompt(`What is your favourite programming language? 
        0: JavaScript 
        1: Python 
        2: Rust 
        3: C++ `));
        if(Number.isInteger(ans)&&ans>=0&&ans<=3)
        {
         this.answers[ans]=this.answers[ans]+1;
        }
        displayResults.call(this,{ answers: [5, 2, 3] },"string");
        console.log(this.answers);
    }
  }; 
  document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll));
  displayResults.call(poll,{ answers: [5, 2, 3] }, 'string');
