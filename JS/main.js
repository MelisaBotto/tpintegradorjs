function totalAPagar(cantTickets, categoria){
    const valorTicket = 200;
    let total = cantTickets*valorTicket;

    switch (categoria) {
        case "Estudiante":
            total = total - (total*80/100)
            break;
        case "Trainee": 
            total = total - (total*50/100)
            break;
        case "Junior": 
            total = total - (total*15/100)
            break;
    }
    return total
}
let boton = document.getElementById ("resumen")

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();  
})

boton.addEventListener("click", () => {
    let cantidad = document.getElementById("inputCantidad").value
    let categoria = document.getElementById("inputCategoria").value

    let valor = totalAPagar(cantidad, categoria)
    
    let divMensaje = document.getElementById("mensaje")
    divMensaje.textContent= "Total a pagar: $" + valor 

})

