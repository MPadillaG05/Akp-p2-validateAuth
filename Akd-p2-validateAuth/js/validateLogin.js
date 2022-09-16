//Validar que el correo posea dominio.

const formLogin = document.getElementById('formLogin'); 
const inputs = document.querySelectorAll('#formLogin input');

const expresiones = {
	password: /^.{6,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	password: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
            break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'correo');
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

//VALIDA DESPUES DE SOLTAR LA TECLA
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// Agrega documentos, comprobando la validación
formLogin.addEventListener('submit', (e) => {

	if(campos.password && campos.correo){
		formLogin.reset();
	} else {
        alert("El correo tiene que tener dominio y el password mas de 6 caracteres");
    }
});