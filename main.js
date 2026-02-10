// --- Carrusel y menú hamburguesa ---


document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("inicio")) {
    // Carrusel automático
    const slides = document.querySelectorAll(".slide");
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("activo");
      index = (index + 1) % slides.length;
      slides[index].classList.add("activo");
    }, 3000);

    // Menú hamburguesa
    const hamburguesa = document.querySelector('.hamburguesa');
    const menuLinks = document.querySelector('.menu-links');
    hamburguesa.addEventListener('click', () => {
      menuLinks.classList.toggle('activo');
    });
  }

  // --- Búsqueda con lupa ---
const iconoBuscar = document.getElementById("icono-buscar");
const menuBuscar = document.getElementById("menu-buscar");
const campoBuscar = document.getElementById("campo-buscar");
const resultados = document.getElementById("resultados-busqueda");
const botonBuscar = document.getElementById("btn-buscar"); // aquí corregido

if (iconoBuscar && menuBuscar && campoBuscar && resultados && botonBuscar) {
  const productos = [
    { nombre: "Hombre", url: "hombre.html" },
    { nombre: "Mujer", url: "mujer.html" },
    { nombre: "Otros", url: "#" },
    { nombre: "Rebajas", url: "rebajas.html" },
    { nombre: "Gorra", url: "#" },
    { nombre: "Gorras de hombre", url: "gorras.h.html" },
    { nombre: "Perfume", url: "#" },
    { nombre: "Perfumes", url: "#" },
    { nombre: "Perfume de dama", url: "#" },
    { nombre: "Camisa de hombre", url: "camisas-h.html" },
    { nombre: "Camisa de mujer", url: "camisas-m.html" },
    { nombre: "Pantalón de hombre", url: "pantalones-h.html" },
    { nombre: "Pantalón de mujer", url: "pantalones-m.html" }
  ];

  // --- Función de búsqueda ---
  function ejecutarBusqueda() {
    resultados.innerHTML = "";
    const termino = campoBuscar.value.trim().toLowerCase();
    const encontrados = productos.filter(p => p.nombre.toLowerCase().includes(termino));

    if (encontrados.length) {
      encontrados.forEach(p => {
        const enlace = document.createElement("a");
        enlace.textContent = p.nombre;
        enlace.href = p.url;
        enlace.classList.add("resultado-item");
        resultados.appendChild(enlace);
      });
    } else {
      resultados.textContent = "No se encuentra el producto que estás buscando";
    }
  }

  // Mostrar/ocultar menú al hacer click en lupa
  iconoBuscar.addEventListener("click", (e) => {
    e.stopPropagation();
    menuBuscar.style.display = menuBuscar.style.display === "block" ? "none" : "block";
    campoBuscar.focus();
  });

  // Buscar al presionar Enter
  campoBuscar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ejecutarBusqueda();
    }
  });

  // Buscar al hacer clic en el botón
  botonBuscar.addEventListener("click", ejecutarBusqueda);

  // Cerrar menú si clic fuera
  document.addEventListener("click", (e) => {
    if (!menuBuscar.contains(e.target) && e.target !== iconoBuscar) {
      menuBuscar.style.display = "none";
    }
  });
}


// ---------- Carrito de compras ---------- //
const iconoCarrito = document.getElementById("icono-carrito");
const menuCarrito = document.getElementById("menu-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const btnVaciar = document.getElementById("btn-vaciar");

let carrito = [];

// Mostrar/ocultar carrito al hacer clic en el icono
iconoCarrito.addEventListener("click", (e) => {
  e.stopPropagation();
  menuCarrito.style.display = menuCarrito.style.display === "block" ? "none" : "block";
});

// Cerrar carrito si clic fuera
document.addEventListener("click", (e) => {
  if (!menuCarrito.contains(e.target) && e.target !== iconoCarrito) {
    menuCarrito.style.display = "none";
  }
});

// Renderizar carrito
function renderCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${producto.nombre}</span>
      <span>$${producto.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">X</button>
    `;
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  totalCarrito.textContent = `Total: $${total}`;
}

// Agregar producto (ejemplo: desde botones de productos)
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  renderCarrito();
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  carrito = [];
  renderCarrito();
});




// --- Idioma / traducciones --- //
  const toggleBtn = document.getElementById("toggle-idioma");
  const panel = document.getElementById("panel-idioma");
  const cerrarBtn = document.getElementById("cerrar-panel");
  const selector = document.getElementById("pais-idioma");
  const botonVamos = document.getElementById("btn-vamos");

  const traducciones = {
    español: {
      "hombre": "HOMBRE",
      "mujer": "MUJER",
      "otros": "OTROS",
      "titulo-catalogo": "COMPRA POR CATEGORIA",
      "gorras": "GORRAS",
      "p-gorras": "Nueva colección de gorras unisex",
      "b-gorras": "COMPRAR",
      "perfume-d": "PERFUMES DE DAMA",
      "p-perfume-d": "Explora nuestra variedad en perfumes para dama",
      "b-perfume-d": "COMPRAR",
      "envio": "ENVÍO GRATIS",
      "p-envio": "Por compras superiores a $1,000 MXN",
      "entregas": "TIEMPOS DE ENTREGA",
      "p-entregas": "3 a 5 días hábiles a partir del día siguiente de realizar tu compra",
      "mejor": "TU MEJOR OPCIÓN",
      "p-mejor": "Porque somos el estilo que te acompaña...",
      "mi-cuenta": "MI CUENTA",
      "inicio": "INICIAR SESIÓN",
      "registarme": "REGISTRARME",
      "productos": "PRODUCTOS",
      "rebajas": "REBAJAS",
      "info": "INFORMACIÓN DE LA EMPRESA",
      "atencion": "ATENCIÓN AL CLIENTE",
      "acerca": "ACERCA DE LA MARCA",
      "siguenos": "Síguenos",
      "idioma": "Selecciona país / idioma",
      "pais": "Selecciona país",
      "vamos": "VAMOS",
      "aviso": "Aviso Legal",
      "condiciones": "Condiciones Generales",
      "privacidad": "Privacidad"
    },
    ingles: {
      "hombre": "MEN",
      "mujer": "WOMEN",
      "otros": "OTHERS",
      "titulo-catalogo": "SHOP BY CATEGORY",
      "gorras": "CAPS",
      "p-gorras": "New unisex cap collection",
      "b-gorras": "BUY",
      "perfume-d": "WOMEN'S PERFUMES",
      "p-perfume-d": "Explore our variety of perfumes for women",
      "b-perfume-d": "BUY",
      "envio": "FREE SHIPPING",
      "p-envio": "For purchases over $1,000 MXN",
      "entregas": "DELIVERY TIMES",
      "p-entregas": "3 to 5 business days from the day after your purchase",
      "mejor": "YOUR BEST OPTION",
      "p-mejor": "Because we are the style that accompanies you...",
      "mi-cuenta": "MY ACCOUNT",
      "inicio": "LOG IN",
      "registarme": "REGISTER",
      "productos": "PRODUCTS",
      "rebajas": "SALES",
      "info": "COMPANY INFORMATION",
      "atencion": "CUSTOMER SERVICE",
      "acerca": "ABOUT THE BRAND",
      "siguenos": "Follow us",
      "idioma": "Select country / language",
      "pais": "Select country",
      "vamos": "GO",
      "aviso": "Legal Notice",
      "condiciones": "General Conditions",
      "privacidad": "Privacy"
    },
    frances: {
      "hombre": "HOMMES",
      "mujer": "FEMMES",
      "otros": "AUTRES",
      "titulo-catalogo": "ACHETEZ PAR CATÉGORIE",
      "gorras": "CASQUETTES",
      "p-gorras": "Nouvelle collection de casquettes unisexes",
      "b-gorras": "ACHETER",
      "perfume-d": "PARFUMS FEMME",
      "p-perfume-d": "Découvrez notre variété de parfums pour femmes",
      "b-perfume-d": "ACHETER",
      "envio": "LIVRAISON GRATUITE",
      "p-envio": "Pour les achats supérieurs à 1 000 MXN",
      "entregas": "DÉLAIS DE LIVRAISON",
      "p-entregas": "3 à 5 jours ouvrables à partir du lendemain de votre achat",
      "mejor": "VOTRE MEILLEURE OPTION",
      "p-mejor": "Parce que nous sommes le style qui vous accompagne...",
      "mi-cuenta": "MON COMPTE",
      "inicio": "SE CONNECTER",
      "registarme": "S'INSCRIRE",
      "productos": "PRODUITS",
      "rebajas": "SOLDES",
      "info": "INFORMATIONS SUR L'ENTREPRISE",
      "atencion": "SERVICE CLIENT",
      "acerca": "À PROPOS DE LA MARQUE",
      "siguenos": "Suivez-nous",
      "idioma": "Sélectionnez le pays / la langue",
      "pais": "Sélectionnez le pays",
      "vamos": "ALLONS-Y",
      "aviso": "Mentions légales",
      "condiciones": "Conditions générales",
      "privacidad": "Confidentialité"
    }
  };

  if(toggleBtn && cerrarBtn && selector && botonVamos) {
    toggleBtn.addEventListener("click", () => {
      panel.classList.add("activo");
      toggleBtn.style.display = "none";
    });

    cerrarBtn.addEventListener("click", () => {
      panel.classList.remove("activo");
      toggleBtn.style.display = "block";
    });

    botonVamos.addEventListener("click", () => {
      const idioma = selector.value;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const clave = el.dataset.i18n;
        el.textContent = traducciones[idioma][clave];
      });
      panel.classList.remove("activo");
      toggleBtn.style.display = "block";
    });
  }

  botonVamos.addEventListener("click", () => {
  const idioma = selector.value;
  localStorage.setItem("idiomaSeleccionado", idioma);
  aplicarTraducciones(idioma);
  panel.classList.remove("activo");
  toggleBtn.style.display = "block";
});

function aplicarTraducciones(idioma) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.dataset.i18n;
    el.textContent = traducciones[idioma][clave];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idiomaSeleccionado");
  if (idiomaGuardado) {
    aplicarTraducciones(idiomaGuardado);
  }
});

  // --- Registro y login ---
  const formLogin = document.getElementById("form-login");
  const formRegistro = document.getElementById("form-registro");
  const mostrarLogin = document.getElementById("mostrar-login");
  const mostrarRegistro = document.getElementById("mostrar-registro");
  const tituloForm = document.getElementById("titulo-form");
  const mensaje = document.getElementById("mensaje");

  if (mostrarRegistro && mostrarLogin && formLogin && formRegistro) {
    mostrarRegistro.addEventListener("click", () => {
      formLogin.classList.add("oculto");
      formRegistro.classList.remove("oculto");
      tituloForm.textContent = "Registrarse";
      mensaje.textContent = "";
    });

    mostrarLogin.addEventListener("click", () => {
      formRegistro.classList.add("oculto");
      formLogin.classList.remove("oculto");
      tituloForm.textContent = "Iniciar sesión";
      mensaje.textContent = "";
    });

    // Registro
    formRegistro.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("registro-nombre").value.trim();
      const email = document.getElementById("registro-email").value.trim();
      const password = document.getElementById("registro-password").value.trim();
      if(!nombre || !email || !password) {
        mensaje.textContent = "Por favor completa todos los campos.";
        return;
      }
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      if(usuarios.find(u => u.email === email)) {
        mensaje.textContent = "Ese correo ya está registrado.";
        return;
      }
      usuarios.push({ nombre, email, password });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      mensaje.textContent = "Cuenta creada para " + nombre;
      formRegistro.reset();
    });

    // Login
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuario = usuarios.find(u => u.email === email && u.password === password);
      if(!usuario) {
        mensaje.textContent = "Correo o contraseña incorrectos.";
        return;
      }

      // Guardar usuario activo
      localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

      // Redirigir al inicio
      window.location.href = "index.html"; // <-- ajusta ruta a tu página principal
    });
  }

  // --- Mostrar usuario activo en inicio ---
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (usuarioActivo) {
    const acciones = document.querySelector(".acciones");
    if (acciones) {
      const saludo = document.createElement("span");
      saludo.textContent = "Bienvenido, " + usuarioActivo.nombre;
      saludo.style.marginLeft = "10px";
      acciones.appendChild(saludo);

      const logoutBtn = document.createElement("button");
      logoutBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
      logoutBtn.classList.add("cerrar-sesion");
      logoutBtn.style.marginLeft = "10px";

      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
      });

      acciones.appendChild(logoutBtn);
    }
  }

});

// Renderiza la lista de favoritos como mini catálogo
function mostrarFavoritos() {
  const lista = document.getElementById('lista-favoritos');
  lista.innerHTML = '';

  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="favorito-item">
        <img src="${item.img}" alt="${item.nombre}" style="width:80px; height:auto; margin-right:10px;">
        <div>
          <h3>${item.nombre}</h3>
          <p>${item.precio}</p>
        </div>
      </div>
    `;
    lista.appendChild(li);
  });
}

// Manejo de clic en corazones
document.querySelectorAll('.like-icon').forEach(icon => {
  icon.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const producto = this.closest('.producto');
    const nombre = producto.querySelector('h2').textContent;
    const img = producto.querySelector('.img1').getAttribute('src');
    const precio = producto.querySelector('.precio-descuento').textContent;

    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (this.classList.contains('fa-solid')) {
      // quitar de favoritos
      favoritos = favoritos.filter(item => item.nombre !== nombre);
      this.classList.remove('fa-solid');
      this.classList.add('fa-regular');
      this.style.color = '';
    } else {
      // agregar a favoritos
      favoritos.push({ nombre, img, precio });
      this.classList.remove('fa-regular');
      this.classList.add('fa-solid');
      this.style.color = '#0f3d2e';
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    mostrarFavoritos();
  });
});

// Renderizar al cargar la página
document.addEventListener('DOMContentLoaded', mostrarFavoritos);

document.addEventListener('DOMContentLoaded', () => {
  mostrarFavoritos();

  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  document.querySelectorAll('.producto').forEach(producto => {
    const nombre = producto.querySelector('h2').textContent;
    const icon = producto.querySelector('.like-icon');

    if (favoritos.some(item => item.nombre === nombre)) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      icon.style.color = '#0f3d2e';
    }
  });
});
