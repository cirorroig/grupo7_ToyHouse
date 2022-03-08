window.addEventListener("load",()=>{

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        image:/^.*\.(jpg|JPG|gif|GIF|jpeg|JPEG|png|PNG)$/
    }  

    let formulario=document.getElementById("formulario")
    let inputs=document.querySelectorAll("#formulario input")
    let image=document.getElementById("image")

    const campos={
        first_name:false,
        last_name:false,
        email:false,
        password:false,
        image:false
    }



    const validarFormulario=(e)=>{
        switch (e.target.name) {
            case "first_name":
                validarCampo(expresiones.nombre,e.target,"first_name")
            break;
            case "last_name":
                validarCampo(expresiones.nombre,e.target,"last_name")
            break;
            case "email":
                validarCampo(expresiones.email,e.target,"email")
            break;
            case "password":
                validarCampo(expresiones.password,e.target,"password")
            break;
            case "image":
                validarCampo(expresiones.image,e.target,"image")
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

   
        if(campos.first_name && campos.last_name && campos.email && campos.password && campos.image){
 
        }
        else{
            e.preventDefault() 
          
        }
        
    })






})