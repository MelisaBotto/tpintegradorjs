console.log("%Mensaje de color verde y grande", "color:green; font-size:x-large");
console.error("error")



//VARIABLE COMUN

let my_variable = "Hola Codo a Codo"

my_variable = 25

console.log(my_variable - 2 )

console.log(my_variable) 

//ARREGLOS

//creando arreglos

                //34(p0) , true(p1), 1(p2), ["hola","chau"](p3) , 3.4(p4)
let my_array = [ 34 , true , 1 , ["hola","chau"] , 3.4]

let my_array1 = []

let my_array2 = new Array(1,2,3)

console.log(my_array)

//acceder a un elemento del array a traves de su posicion

console.log("el elemento que esta en la posicion 3 es: " , my_array[3] )

console.log("el elemento que esta en la posicion 1 del arreglo de la posicion3 es: " , my_array[3][1] )

console.log( "resta entre 34 - 2 : ", my_array[0] - 2)

console.log(my_array)

//METODOS DE ARRAYS

console.dir(Array)

//como saber cuantos elementos tengo

console.log("el arreglo my_array tiene " , my_array.length , " elementos")

//como saber el indice de un elemento

//nombre_array.indexOf(elemento)

console.log("El elemento true esta en la posicion: " , my_array.indexOf(true))

//como añadir elementos al array

//metod splice
//nombre_array.splice( indice, 0 , nuevoelemento ) 
//el nuevo elemento se añadira al lado del indice indicado y no reemplazara al elemento

let dias = ["Sabado","Domingo"]

console.log(dias)

dias.splice(3, 0 , "hola") 

console.log("Este es el splice con un indice que no existia: " , dias)


//posicion en la que quiero que se ubique , lacantidad de elementos que quiero reemplazar a partir de esa posicion

dias.splice(0,0, "Viernes")

console.log(dias) // viernes, sabado , domingo


//eliminar elementos de un array

//nombre_array.splice(indice) //elimina todos los elementos a partir del indice que indicamos

//dias.splice(1) //cortamos sabado , domingo

//console.log(dias) //viernes

//nombre_array.splice(indice, cantelementos) //elimina la cantidad de elementos indicados a partir del indice 

//dias.splice(0, 3) 

console.log(dias)//



//como recorrer un array

dias.forEach(
    
    function(elemento, indice) {
        console.log("El elemento:" , elemento, " se encuentra en la posicion: ", indice);}
)







//FUNCIONES EN JAVASCRIPT

//DECLARATIVA
//la podemos llamar en cualquier momento

/*
function nombredelafuncion(parametro1 ,parametro2,prametro3 ...){
    bloque de codigo
}
*/

console.log("llamando a la funcion antes de su declaracion: " , suma(2,2))

function suma(num1 , num2){
    return num1 + num2
}


console.log(suma(56,15))


//EXPRESIVA
//no pueden ser llamadas en cualquier momento
//deben ser llamadas despues de la declaracion de la funcion

//ESTO DARIA ERROR
//console.log("el resultado de la suma expresiva es: " , suma_expresiva(5,5))

let suma_expresiva = function(numero1,numero2) {
    return numero1 + numero2
}

console.log("el resultado de la suma expresiva es: " , suma_expresiva(3,3))

//FLECHA o ARROW FUNCTION

//esto da error
//console.log("el resultado de la suma flecha es: " , suma_flecha(1,3))

let suma_flecha = (n1,n2) => n1+n2 ;

console.log("el resultado de la suma flecha es: " , suma_flecha(1,1))