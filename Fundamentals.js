// Variables 
// Contenedor de información

// ES6 
// let - const
// var  ❌ - Hoisting
var CI = 123
let sueld0= 500

// Tipos de datos - Primitivos
let numOrden=127 // Int
let modulo="Mis ordenes" // String
let status = true // Boolean
let tipoPago ='E' // Char
let precioFinal=155.99 // Float
let tipoCuenta  // Undefined

// Tipos de datos - Compuestos
let ordenes = ["Balon", "Camiseta", "Zapatos"] // Array
let detalleOrden={   // Objeto
    id:1,
    estado:true,
    precio: 150.99,
    items:["Pc", "Monitor", "Teclado"]
}

// Tarea Desafío  JSON vs Objeto

// Strings


let  nombreCompleto = "Byron Loarte - Docente"
nombreCompleto.length // validar password
nombreCompleto.toUpperCase() // Guardar en BDD
nombreCompleto.toLocaleLowerCase() // Guardar en BDD
nombreCompleto.trim() // "  Byron    "   - "Byron"
nombreCompleto.includes("Docente") // Validar rol

// ES6 - Template strings
console.log("hola" + nombreCompleto)
console.log(`Hola ${nombreCompleto}`)



// Numbers
let cuotas = "36"
console.log(cuotas+1) // "361"
// ES6
console.log(+cuotas+1) // 37


// Precedencia de operadores
console.log( 4 * 3 ** 2) // 36


// Booleans
let saldoCuenta = 1000
let saldoTrajeta = "1000"
// Comparación del valor
console.log(saldoCuenta == saldoTrajeta)
// ES6 - Comparación del valor y tipo "Comparación estricta"
console.log(saldoCuenta === saldoTrajeta)


// Condicionales
let carritoCompras = []

if (carritoCompras.length === 0){
    console.log("Carrito vacío")
}
else{
    console.log("Carrito lleno")
}
// ES6 - Operador ternario
carritoCompras.length === 0 ? log("Carrito vacío") : console.log("Carrito lleno")


// Funciones

// Función - bloque de código reutiliazable

// Función declarada
function validarUsuario (){
    console.log("usuario validado")
}

// Función expresada 
const validarRol = function(){
    console.log("Rol validado")
}

// ES6 - Función de flecha

const validarMail = ()=>{
    console.log("Mail validado")
}
















