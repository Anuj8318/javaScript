setInterval(()=>{
    const time = new Date();
    time.toLocaleTimeString();

    document.querySelector('#clock').innerHTML=time;
},1000)

