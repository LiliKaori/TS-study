/**
 * Tipos primitivos
 * number -> num inteiro, num decimais
 * string -> texto, caracteres
 * boolean -> true, false
 */

let age: number = 27;
let fullName: string = "Liliam"
let isAlive: boolean = true

//Inferência de tipos - ao definir valor à variável, ele autodefine a tipagem
let animal = 'Cat'
let quantity = 23

//parâmetros e retornos de funções
function sum(a: number, b: number): number {
    const result = a+b
    
    return result
}


//função com retorno opcional
function greeting(fullName: string): string | void {
    if(fullName) {
        return `Hello, ${fullName}`
    }    
}

//função com parâmetros opcionais
function stringOrNumberSize(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }

    return value
}
