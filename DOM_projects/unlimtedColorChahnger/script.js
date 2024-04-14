// genarte a random color

const randColor  = function(){
    const hex = "0123456789ABCDEF"
     let color = '#';
     for(let i =0;i<6;i++)
     {
       color = color + hex[Math.floor( Math.random()*16)]
     }
     return color;
}
let intervalId;

const startChangingColor = function(){

    if(intervalId==null)
    {

        intervalId= setInterval(changeColor,1000);
    }
    function changeColor(){
        document.body.style.backgroundColor =randColor();

    }
};
const stopChangingColor = function(){
   clearInterval(intervalId);

//    flush out the intervalid
intervalId = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
