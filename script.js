const body= document.querySelector("body"),
      home1= document.querySelector(".home");
      nav=document.querySelector("nav"),
      modeToggle= document.querySelector(".dark-light"),
      searchToggle=document.querySelector(".searchToggle"),
      sidebarClose=document.querySelector(".sidebarClose"),
      cartToggle=document.querySelector(".cartToggle"),
      sidebarOpen=document.querySelector(".sidebarOpen");



      let getMode =localStorage.getItem("mode");

      if(getMode && getMode ==="dark-mode"){
        body.classList.add("dark");
      }

      //dark and light mode
      modeToggle.addEventListener("click", ()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark")


        //js code keep user selected mode even page refresh or file open
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode","light-mode");

        }
        else{
            localStorage.setItem("mode","dark-mode");
        }
      })

      //toggle search box
      searchToggle.addEventListener("click", ()=>{
        searchToggle.classList.toggle("active");
        
      })

      //toggle side bar
      sidebarOpen.addEventListener("click", ()=>
      nav.classList.toggle("active")

      );

      body.addEventListener("click", e =>{
        let clickedElm=e.target;

        if(!clickedElm.classList.contains("sidebarOpen")&& !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
        else{

        }

        if(!clickedElm.classList.contains("sidebarOpen")){
            home1.style.display="block";
        }
        else{
            home1.style.display="none";
        }
      
          
      });

      cartToggle.addEventListener("click", ()=>{
        cartToggle.classList.toggle("active");
        
      })

      
      // items

      item=document.getElementsByClassName("card");
      button=document.getElementById("itembtn");
      button1=document.getElementById("itemsalad")


      button.addEventListener("click", ()=>{
        buttonValue=button.value;
        console.log(buttonValue)

      })
      button1.addEventListener("click", ()=>{
        buttonValue=button1.value;
        console.log(buttonValue)

      })

