let main=document.getElementById("main");
main.addEventListener('click',() =>{
    rio.style.transitionDuration="5s";
    rio.style.position="absolute";
    rio.style.top="50px";
    rio.style.left="800px";


    setTimeout(()=>{
        main.style.backgroundColor="red";
        

    },5000)
})