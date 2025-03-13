// efecto del header

const headerEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
    headerEl.classList.add('header-scrolled')
    } else if (window.scrollY <=20) {
        headerEl.classList.remove('header-scrolled') 
    }
})

const headerElMobile = document.querySelector('.nav-mobile');

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
    headerElMobile.classList.add('header-scrolled-mobile')
    } else if (window.scrollY <=20) {
        headerElMobile.classList.remove('header-scrolled-mobile') 
    }
})

// hamburguer menu

let navLinks = document.querySelector(".nav");
let menuOpenBtn = document.querySelector(".bx-menu");
let menuCloseBtn = document.querySelector(".bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.top = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.top = "-100%";
}


// newsletter

document.getElementById("newsletter-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (!email) {
        message.textContent = "Por favor, introduce un correo válido.";
        message.style.display = "block";

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);


        return;
    }

    try {
        const response = await fetch("http://localhost:3000/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        message.textContent = data.message;
    } catch (error) {
        message.textContent = "Error al enviar el correo.";
        message.style.display = "block";

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    }
});