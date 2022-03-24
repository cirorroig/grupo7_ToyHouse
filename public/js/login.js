window.addEventListener("load",()=>{

    const expresiones = {
        
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        
    }  

    let formulario=document.getElementById("form")
    let inputs=document.querySelectorAll("#form input")
    

    const campos={
        email:false,
        password:false,
    }



    const validarFormulario=(e)=>{
        switch (e.target.name) {
           
            case "email":
                validarCampo(expresiones.email,e.target,"email")
            break;
            case "password":
                validarCampo(expresiones.password,e.target,"password")
            break;
        }
        console.log();
    }

    const validarCampo=(expresion,input,campo)=>{
        if(expresion.test(input.value)){
            document.getElementById(campo).classList.remove("is-invalid")
            document.getElementById(campo).classList.add("is-valid")
            document.querySelector(`.${campo}Error`).classList.remove("error-activo", "text-danger")
            campos[campo]=true;
        }else{
            document.getElementById(campo).classList.remove("is-valid")
            document.getElementById(campo).classList.add("is-invalid")
            document.querySelector(`.${campo}Error`).classList.add("error-activo","text-danger")
            campos[campo]=false;
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener("keyup",validarFormulario)
        input.addEventListener("blur",validarFormulario)
    })
    


    formulario.addEventListener("submit",(e)=>{

   
        if(campos.email && campos.password ){
        }
        else{
            e.preventDefault() 
          
        }
        
    })
})

