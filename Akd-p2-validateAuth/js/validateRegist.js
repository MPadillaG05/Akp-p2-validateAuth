//Validar los formulario que no sean caracteres especiales.


const formRegist = document.getElementById('formRegist');
const inputs = document.querySelectorAll('#formRegist input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{6,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,9}$/ 
}

const campos = {
	nombre: false,
	apellido: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
		case "last-name":
			validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
		case "confirm-password":
			validarPassword2();
            break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'correo');
            break;
		case "phone":
			validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
	}
}

//VALIDA CAMPOS
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;
        console.log("PERMITIDO");
	} else {
		campos[campo] = false;
        console.log("NO PERMITIDO");
	}
}


//VALIDA CONFIRMACION DE CONTRASEÑA
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('confirmPassword');

	if(inputPassword1.value !== inputPassword2.value){
		campos['password'] = false;
        console.log("DIFERENTES "+inputPassword1.value+" Y "+inputPassword2.value);
	} else {
		campos['password'] = true;
        console.log("IGUALES "+inputPassword1.value+" Y "+inputPassword2.value);
	}
}

//VALIDA DESPUES DE SOLTAR LA TECLA
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


// Agrega documentos, comprobando la validación
formRegist.addEventListener('submit', (e) => {

	const terminos = document.getElementById('termCon');
	if(campos.nombre && campos.apellido && campos.password && campos.correo && campos.telefono && terminos.checked){
        
        alert("CUENTA CREADA");
		//e.preventDefault();
		formRegist.reset();
        
	} else {
        alert("INGRESE BIEN LO DATOS");
       	//e.preventDefault();
    }
});
