let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let pass = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");
const cadenaDeCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";

function generar(){
    let numeroDigitado = parseInt(cantidad.value);    
    let password = '';
    if(numeroDigitado < 8){
        alert("el digito es menor a 8");
    }
    else{
        for(let i=0; i<numeroDigitado; i++){
            let caracterAleatoreo = cadenaDeCaracteres[ Math.floor(Math.random() * cadenaDeCaracteres.length) ];
            password +=caracterAleatoreo;         
        };
        pass.value = password;
        validacion(password);
    }    
}

function validacion(password){
    const mayus = /[A-Z]/.test(password);
    const minus = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const charEspecial = /[!@#$%^&*()-+]/.test(password);
    let validar = 0;
    if(mayus){
        validar=validar + 1;
    }
    if(minus){
        validar=validar + 1;
    }
    if(number){
        validar=validar + 1;
    }
    if(charEspecial){
        validar=validar + 1;
    }
    if(validar == 2){
        mensaje.innerHTML = "La contraseña es Debil";
    }
    else if(validar > 2 && validar <4){
        mensaje.innerHTML = "La contraseña es Media";
    }
    else{
        mensaje.innerHTML = "La contraseña es Fuerte";
    }
}

function limpiar(){
    pass.value = "";
    mensaje.innerHTML = "";
}