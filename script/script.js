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

// hacer que el video no se pueda moveer ni tocar:
const video = document.querySelector('.back-video');
video.muted = true;
video.play();

// Prevenir pausa
video.addEventListener('pause', () => {
  video.play();
});

// Opcional: evitar que se pause al tocar
video.addEventListener('touchstart', (e) => {
  e.preventDefault();
});

// hamburguer menu

let navLinks = document.querySelector(".nav");
let menuOpenBtn = document.querySelector(".bx-menu");
let menuCloseBtn = document.querySelector(".bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.top = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.top = "-200%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".club-arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}

let jsArrow = document.querySelector(".deportes-arrow");
jsArrow.onclick = function() {
navLinks.classList.toggle("show2");
}

// header mobile menu

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Función para verificar si estamos en mobile
  function isMobile() {
    return window.innerWidth <= 1280;
  }

  const dropdowns = document.querySelectorAll(".item-con-dropdown");

  dropdowns.forEach((item) => {
    const trigger = item.querySelector(".dw-title"); // el texto clickable
    const arrow = item.querySelector(".arrow");
    const submenu = item.querySelector(".submenu");

    const toggleSubmenu = () => {
      if (!isMobile()) return; // SOLO mobile

      const isOpen = submenu.classList.contains("open");

      // Cerrar todos los submenús
      document.querySelectorAll(".submenu.open").forEach((openMenu) => {
        openMenu.classList.remove("open");
        openMenu.style.gridTemplateRows = "0fr";
        const arrowEl = openMenu.parentElement.querySelector(".arrow");
        if (arrowEl) arrowEl.style.transform = "rotate(0deg)";
      });

      // Abrir el submenu actual si no estaba abierto
      if (!isOpen) {
        submenu.classList.add("open");
        submenu.style.gridTemplateRows = "1fr";
        arrow.style.transform = "rotate(180deg)";
      }
    };

    // Agregar listeners al texto y a la flechita
    trigger?.addEventListener("click", toggleSubmenu);
    arrow?.addEventListener("click", toggleSubmenu);
  });

  // Si redimensionás a desktop, cerrá todo
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      document.querySelectorAll(".submenu").forEach((el) => {
        el.classList.remove("open");
        el.style.gridTemplateRows = "0fr";
      });
      document.querySelectorAll(".arrow").forEach((el) => {
        el.style.transform = "rotate(0deg)";
      });
    }
  });
});


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