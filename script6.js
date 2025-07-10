
const nombreinput= document.getElementById('nombre');
const mensajeError = document.getElementById('mensajeError');campo.addEventListener(
'input', () => { if (nombreinput.value.length < 3) {
mensajeError.textContent = 'El nombre es demasiado corto'; } else {
mensajeError.textContent = ''; // Limpiar el mensaje si la validación es exitosa //
 }});

const correoInput = document.getElementById('correo');
const correoerroneo = document.getElementById('mensajeError');
correoInput.addEventListener('input', () => {
 const correo = correoInput.value;
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!regex.test(correo)) {
 correoerroneo.textContentt = 'Correo inválido';
 } else {
correoerroneo.textContentt = ''; // Limpiar mensaje de error si el correo es válido
 }
})


const contraseñaInput = document.getElementById('contraseña');
const contraseñainvalidad = document.getElementById('mensajeError');
contraseñaInput.addEventListener('input'), () => {}
 const contraseña = contraseñaInput.value;
 // Verificar longitud mínima de 8 caracteres
 if (contraseña.length < 8) {
  contraseñainvalidad.textContentT = 'La contraseña debe tener al menos 8 caracteres';
 }
 // Verificar si contiene caracteres especiales
 else if (!/[!@#$%^&*(),.?":{}|<>]/.test(contraseña)) {
   contraseñainvalidad.textContenttt = 'La contraseña debe incluir al menos un carácter especial';
 }
 else {
  contraseñainvalidad.textContent = '';} // Limpiar mensaje de error si la contraseña es válida

  const edadInput = document.getElementById('edad');
const edadnopermitida = document.getElementById('edad no permitida');
edadInput.addEventListener('input', () => {
 const edad = parseInt(edadInput.value);
 // Verificar si la edad está en el rango de 18 a 65
 if (edad < 18 || edad > 65) {
 mensajeError.textContent = 'Edad no permitida. Debe estar entre 18 y 65 años.';
 } else {
 mensajeError.textContent = ''; // Limpiar mensaje de error si la edad es válida
 }
}
);