var screen=document.getElementById("screen1");
var screen2=document.getElementById("screen2");
var buttons=document.querySelectorAll("button");
var screenValue=' ';
let res=0;
screen2.disabled=true;  //disable beacuse noone can input only see

for(item of buttons){
    item.addEventListener('click',(e)=>{
        var buttonText=e.target.innerText;
        // console.log(buttonText);
        if(buttonText=='x'){  //if buttonText is equal to x
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='BS'){  //if buttonText is eqaul to BS 
            screenValue=screenValue.substring(0,screenValue.length-1);
            screen.value=screenValue;
        }
        else if(buttonText=='AC'){
            screenValue=' ';
            screen.value=screenValue;
            screen2.value=screenValue;
        }
        else if(buttonText=='ENTER'){
            // if(buttonText=='!'){
            //     // screen2.value=res;
            //     console.log(res);
            // }
            screen2.value=eval(screenValue);
        }
        else if(buttonText=='pow'){ //
            buttonText='**';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}



function fact(){
    var i, num, f;
    f = 1;
    num = screen.value;
    for(i = 1; i <= num; i++)  
    {
        f = f * i;
    }
    i = i - 1;  
    res=f;
    screen2.value=res
}
