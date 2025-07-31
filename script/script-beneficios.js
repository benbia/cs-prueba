let beneficios = []
const URL = "../script/beneficios.json"

const container = document.getElementById("container")
const inputSelect = document.querySelector("#categorias")

const imagenLoading = `<img class="loading-img" src="../img/loading.gif" alt="#">`

function retornarCardError() {
    container.innerHTML = `<div class="card-error">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p>No se encontraron resultados</p>
                </div>`
}

function mostrarCardHTML(arrayBeneficios) {
    container.innerHTML = ""

    arrayBeneficios.forEach(beneficio => {
        container.innerHTML += `<div class="beneficio animate__animated animate__zoomIn animate__slow">
                    <div class="empresa">${beneficio.empresa}</div>
                    <div class="datos-empresa">
                        <h4>${beneficio.descuento}</h4>
                        <p>${beneficio.nota}</p>
                    </div>
                </div>`
    });

}

function cargarBeneficios(arrayBeneficios) {
    if (arrayBeneficios.length > 0) {
        mostrarCardHTML(arrayBeneficios)
    } else {
        setTimeout(()=> {
            retornarCardError()
        }, Math.random()*900) 
    }
}

function filtrarBeneficiosPorCategoria(categoriaSeleccionada) {
    if (categoriaSeleccionada === "0") {
        cargarBeneficios(beneficios)
    } else {
        const filtrados = beneficios.filter(b => b.value === categoriaSeleccionada)
        cargarBeneficios(filtrados)
    }
}

// Evento cuando cambia el select
inputSelect.addEventListener("change", (e) => {
    container.innerHTML = imagenLoading
    const categoria = e.target.value
    setTimeout(() => filtrarBeneficiosPorCategoria(categoria), 300)
})

// Fetch para cargar los datos desde el archivo JSON
document.addEventListener("DOMContentLoaded", () => {
    container.innerHTML = imagenLoading
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            beneficios = data
            cargarBeneficios(beneficios)
        })
        .catch(err => {
            console.error("Error al cargar los beneficios:", err)
            retornarCardError()
        })
})

