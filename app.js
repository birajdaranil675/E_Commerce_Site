let logo =  document.querySelector(".menuIcon");
let ul = document.querySelector("ul");


logo.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className === "showData"){
        document.getElementById("menuBar").className = "ri-close-line";
    }else{
        document.getElementById("menuBar").className = "ri-menu-line";
    }
});

