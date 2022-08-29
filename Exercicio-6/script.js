

window.onclick = (e) => {
   let fet = document.getElementById('texto-black-1');
   if (e.target != fet){
      let dropDownOculto = document.getElementById("dropDownLista-1");
      let imagemFlecha = document.getElementById('imgFlechaUp-1');
      let textBlack = document.getElementsByClassName('texto-black-1')[0];

      if (dropDownOculto.style.display == 'block'){
         dropDownOculto.style.display = 'none';
         imagemFlecha.setAttribute('src', 'icon-arrow-down.svg');
         textBlack.style.color = " hsl(0, 0%, 41%)";
      }
   }

   let comp = document.getElementById('texto-black-2');
   if (e.target != comp){
      let dropDownCompOculto = document.getElementById("dropDownLista-2");
      let imagemFlecha = document.getElementById('imgFlechaUp-2');
      let textBlack = document.getElementsByClassName('texto-black-2')[0];
      
      if (dropDownCompOculto.style.display == 'block'){
         dropDownCompOculto.style.display = 'none';
         imagemFlecha.setAttribute('src', 'icon-arrow-down.svg');
         textBlack.style.color = " hsl(0, 0%, 41%)";
      }
   }
}



function abreFechaDropDownFeatures(){
   let abreFecha = document.getElementById("dropDownLista-1");
   let imagemFlecha = document.getElementById('imgFlechaUp-1');
   let textBlack = document.getElementsByClassName('texto-black-1')[0];

   if(window.getComputedStyle(abreFecha).display == 'none'){
      imagemFlecha.setAttribute("src", "icon-arrow-up.svg");
      abreFecha.style.display = 'block';
      textBlack.style.color = "black";
      } else {
         imagemFlecha.setAttribute('src', 'icon-arrow-down.svg');
         textBlack.style.color = " hsl(0, 0%, 41%)";
         abreFecha.style.display = 'none';
      }
   }




function abreFechaDropDownComp(){
   let abreFecha = document.getElementById("dropDownLista-2");
   let imagemFlecha = document.getElementById('imgFlechaUp-2');
   let textBlack = document.getElementsByClassName('texto-black-2')[0];

   if(window.getComputedStyle(abreFecha).display == 'none'){
      imagemFlecha.setAttribute('src', 'icon-arrow-up.svg');
      abreFecha.style.display = 'block';
      textBlack.style.color = "black";
      } else {
         imagemFlecha.setAttribute('src', 'icon-arrow-down.svg');
         textBlack.style.color = " hsl(0, 0%, 41%)";
         abreFecha.style.display = 'none';
      }
   }



function clickCareers(){
   var clickCar = document.getElementById("opcaoCareers");
   clickCar.style.color = "black";

   clickCar.addEventListener("mouseout", function(){
      clickCar.style.color = "hsl(0, 0%, 41%)";
   })  
}



function clickAbout(){
   var clickAb = document.getElementById("opcaoAbout");
   clickAb.style.color = "black";

   clickAb.addEventListener("mouseout", function(){
      clickAb.style.color = "hsl(0, 0%, 41%)";
   })
}

function clickLogin(){
   var clickLog = document.getElementById("opcaoLogin")
   clickLog.style.color = "black";
   
   clickLog.addEventListener("mouseout", function(){
      clickLog.style.color = "hsl(0, 0%, 41%)";
   })
}

function clickBotaoSuperior(){
   var clickBotaoS = document.getElementById("botaoSuperior");
   clickBotaoS.style.backgroundColor= "hsl(0, 0%, 98%)";
   clickBotaoS.style.color = "black";
   clickBotaoS.style.border = "solid black 2px";

   clickBotaoS.addEventListener("mouseout", function(){
      clickBotaoS.style.backgroundColor= " hsl(0, 0%, 98%)";
      clickBotaoS.style.color = "hsl(0, 0%, 41%)";
      clickBotaoS.style.border = "2px solid hsl(0, 0%, 41%)";
   })
    
}

function clickBotaoMeio(){
   var Black_Btn = document.getElementById("botao-meio-fundo-preto");
   Black_Btn.style.color = "hsl(0, 0%, 8%)";
   Black_Btn.style.background = "hsl(0, 0%, 98%)";

   Black_Btn.addEventListener("mouseout", function(){
      Black_Btn.style.color = "hsl(0, 0%, 98%)";
      Black_Btn.style.background = "black";
   })
   
}

