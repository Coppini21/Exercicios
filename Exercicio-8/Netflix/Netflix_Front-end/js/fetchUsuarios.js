
getUsuarios()
clicandoNoPerfil()


    async function getUsuarios(){
        const divTotalPerfils = document.getElementsByClassName("divTotalPerfils")[0]

        const rotaUsuarios = await fetch (`http://localhost:3000/usuarios`)
        const usuarios = await rotaUsuarios.json()


        usuarios.forEach(element => {
            const div = document.createElement("div")
            const a = document.createElement("a")
            const img = document.createElement("img")
            const p = document.createElement("p")


            div.classList.add("divPerfil")
            a.setAttribute("href", "home.html")
            img.setAttribute("src", "../Netflix_Back-end/src/netflix/storage/profile/default.png")
            p.classList.add("name")
            p.innerHTML = `${element.nome}`


            divTotalPerfils.appendChild(div)
            div.appendChild(a)
            a.appendChild(img)
            a.appendChild(p)
            
        });
        

    }

    
    async function clicandoNoPerfil(){   
        const rotaUsuarios = await fetch (`http://localhost:3000/usuarios`);
        const usuarios = await rotaUsuarios.json();
  
        const divPerfil = document.querySelectorAll(".divPerfil")
        divPerfil.forEach(elementTwo => {  
            elementTwo.addEventListener('click',  () =>{
                let nomeDoUsuario = elementTwo.querySelector('.name')
                usuarios.forEach(usuario => {
                    if(usuario.nome == nomeDoUsuario.innerHTML){
                        localStorage.setItem('user', JSON.stringify(usuario))
                    }
                })
            })
        })  
    }


