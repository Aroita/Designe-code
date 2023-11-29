//comentarios (doble barra o /* multilinea */ )

/* JavaScript proporciona ocho tipos de datos diferentes que son:
 undefined, null, boolean, string, symbol, bigint, numbery object.
 */

 //Las variables (crea o declara) permiten que las computadoras almacenen y manipulen datos de forma dinámica.
 //Almacenamiento de valores con el operador de asignación(=)

var miName;
miName = "Anaconda";

// Asignar el valor de una variable a otra
var MiApellido;
MiApellido = miName;

// Inicializar variables con el operador de asignación
var edad = 38;

// Escribe nombres de variables en JavaScript en camelCase 
// usa let, una variable con el mismo nombre solo se puede declarar una vez.
// las variables declaradas usando const son de solo lectura.(no se puede modificar)

/* TIPO DATO: NUMBER */

//incrementar o agregar fácilmente uno a una variable con el ++operador.(aumentar ++ o diminuir --)

let myVar = 87;
myVar ++;   //88

/*
El operador resto% da el resto de la división de dos números. USO En matemáticas, se puede comprobar si 
un número es par o impar comprobando el resto entre 2. Los números pares tienen un resto de 0, mientras que los números impares tienen un resto de 1. nO FUNCIONA CON NUMEROS NEGATIVOS
Ejemplo

17 % 2 = 1
48 % 2 = 0
*/ 

// La variable (const remainder) debe ser inicializada.
let remainder;
remainder = 11 % 3;

//otro ejemplo: El /=operador divide una variable por otro número.
let a = 48;
let b = 108;
let c = 33;


a /=  12;
b /=  4;
c /=  11;

// barra invertida ( \) delante de la comilla: const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
const myStr =  "I am a \"double quoted\" string inside \"double quotes\"."; 
const conversation = 'Finn exclaims to Jake, "Algebraic!"';


// Secuencias de escape en cadenas
/* ------------------------------
Código	Producción
\'	una frase
\"	comillas dobles
\\	barra invertida
\n	nueva línea
\t	pestaña
\r	retorno de carro
\b	retroceso
\f	alimentación de formulario
-------------------------------------
*/ 

const barra = "FirstLine\n\t\\SecondLine\nThirdLine"; 
