window.addEventListener("load",()=>{

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,50}$/,
        description: /^[a-zA-ZÀ-ÿ@$!%*?&\s]{20,}$/,
        image:/^.*\.(jpg|JPG|gif|GIF|jpeg|JPEG|png|PNG)$/,
        price:/^[0-9]*$/
    }

    const campos={
        nombre:false,
        description:false,
        image:false,
        detailedDescription:false,
    }

    let formulario=document.getElementById("formulario")
    let inputs=document.querySelectorAll(".validation")
    let image=document.getElementById("image")
    let deleteButton=document.querySelector(".deleteForm")
    image.addEventListener("change",(e)=>{
        validarCampo(expresiones.image,e.target,"image")
    })

    deleteButton.addEventListener("submit",()=>{
        alert("Producto eliminado correctamente")
    })

    const validarFormulario=(e)=>{
        switch (e.target.name) {
            case "name":
                validarCampo(expresiones.nombre,e.target,"name")
            break;
            case "description":
                validarCampo(expresiones.description,e.target,"description")
            break;
            case "detailedDescription":
                validarCampo(expresiones.description,e.target,"detailedDescription")
            break;
        }
    }
    const validarCampo=(expresion,input,campo)=>{
        console.log(input.value);
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

   
    inputs.forEach(input => {
        input.addEventListener("keyup",validarFormulario)
        input.addEventListener("blur",validarFormulario)
    });

    formulario.addEventListener("submit",(e)=>{

        console.log(campos.name,campos.description,campos.detailedDescription);
        if(campos.name && campos.description && campos.image && campos.detailedDescription){
            alert("Producto editado correctamente")
        }
        else{
            e.preventDefault() 
          
        }
        
    })


})