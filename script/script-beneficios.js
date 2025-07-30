

const beneficios = []
const URL = "script/beneficios.json"


const container = document.getElementById("container")
const imagenLoading = `<img src="../img/loading.gif" alt="">`

function retornarCardError () {
    return container.innerHTML = `<div class="cardError animate__animated animate__zoomIn">
    <i class='bx bx-error-circle errorIcon'></i>
    <p class="p-error">Los sentimos, pero no hemos podido encontrar el producto que buscaste</p>
    </div>`
}

function mostrarCardHTML(arrayBeneficios) {
    container.innerHTML = ""

    arrayBeneficios.forEach(beneficio => {
        container.innerHTML += `<div class="beneficio">
                    <div class="empresa">${}</div>
                    <div class="datos-empresa">
                        <h4>${}</h4>
                        <p>${}</p>
                    </div>
                </div>`
    });

}

function cargarBeneficios(arrayBeneficios) {
    if (arrayProductos.length > 0) {
        mostrarCardHTML(arrayBeneficios)
    } else {
        setTimeout(()=> {
            retornarCardError()
        }, Math.random()*900) 
    }
}


async function obtenerBeneficios() {
    try {
        const response = await fetch(URL)
        if(response.ok === true) {
            const data = await response.json() // encuentra el array de objetos y lo retorna como js (lo transforma de json a js)
            productos.push(...data)
            cargarBeneficios(beneficios)
        } else {
            throw new Error("No se encontraron resultados " + "(" + response.status + ")")
        }
        
    } catch (error) {
        console.error(error)
    }
}

obtenerProductos()



inputBuscar.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && inputBuscar.value.trim() !== "") {
        const productosFiltrados = productos.filter(producto => producto.nombre.toUpperCase().includes(inputBuscar.value.toUpperCase().trim()))
        container.innerHTML = imagenLoading

        setTimeout(()=> {
            cargarProductos(productosFiltrados)
        }, Math.random()*900)

    }
})

inputBuscar.addEventListener("input", () => {
    inputBuscar.value.trim() == "" && cargarProductos(productos) // si se cumple lo de elvalor "" entonces... (operador logico &&)
})