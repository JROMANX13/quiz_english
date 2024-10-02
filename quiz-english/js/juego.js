// Arreglo que contiene las preguntas

const preguntas = [
  {
    id: 1,
    categoria: "application-software",
    titulo: "What is the primary function of application software?",
    opciones: ["A) To manage hardware resources", "B) To perform specific tasks for users", "C) To provide a platform for system software"],
    correcta: "b",
  },
  {
    id: 2,
    categoria: "application-software",
    titulo: "Which of the following is an example of database software?",
    opciones: ["A) Microsoft Word", "B) Oracle Database", "C) Adobe Photoshop"],
    correcta: "b",
  },
  {
    id: 3,
    categoria: "application-software",
    titulo: "What type of application software is primarily used for video editing?",
    opciones: ["A) Microsoft Excel", "B) Adobe Premiere Pro", "C) Zoom"],
    correcta: "b",
  },
  {
    id: 4,
    categoria: "application-software",
    titulo: "How has cloud computing changed application software?",
    opciones: [
      "A) It has made applications harder to access",
      "B) It has limited the types of applications available",
      "C) It has allowed for access from any device with an internet connection",
    ],
    correcta: "c",
  },
  {
    id: 5,
    categoria: "application-software",
    titulo: "Which of the following applications is designed for personal organization?",
    opciones: ["A) Google Docs", "B) Todoist", "C) Slack"],
    correcta: "b",
  },

  {
    id: 6,
    categoria: "system-software",
    titulo: "What is the primary function of system software?",
    opciones: ["A) To perform specific tasks for users", "B) To manage and control hardware components", "C) To provide entertainment through games"],
    correcta: "b",
  },
  {
    id: 7,
    categoria: "system-software",
    titulo: "Which of the following is an example of an operating system?",
    opciones: ["A) Microsoft Word", "B) Adobe Photoshop", "C) Linux"],
    correcta: "c",
  },
  {
    id: 8,
    categoria: "system-software",
    titulo: "What role do device drivers play in a computer system?",
    opciones: [
      "A) They create graphical user interfaces",
      "B) They manage network connections",
      "C) They allow the operating system to communicate with hardware devices",
    ],
    correcta: "c",
  },
  {
    id: 9,
    categoria: "system-software",
    titulo: "Which type of system software helps maintain and control computer resources?",
    opciones: ["A) Firmware", "B) Utility Programs", "C) Application Software"],
    correcta: "b",
  },
  {
    id: 10,
    categoria: "system-software",
    titulo: "What is one of the key benefits of system software?",
    opciones: [
      "A) It enhances the aesthetic design of applications",
      "B) It optimizes hardware resource use for efficiency",
      "C) It replaces the need for hardware components",
    ],
    correcta: "b",
  },

  {
    id: 11,
    categoria: "jobs-in-tech",
    titulo: "What is the primary role of a software developer?",
    opciones: ["A) To manage databases", "B) To develop applications and systems for users", "C) To ensure cybersecurity"],
    correcta: "b",
  },
  {
    id: 12,
    categoria: "jobs-in-tech",
    titulo: "Which type of developer focuses on the client side of web applications?",
    opciones: ["A) Back-End Developer", "B) Full-Stack Developer", "C) Front-End Developer"],
    correcta: "c",
  },
  {
    id: 13,
    categoria: "jobs-in-tech",
    titulo: "What is the main responsibility of a data analyst?",
    opciones: ["A) Designing user interfaces", "B) Collecting and analyzing large datasets", "C) Managing computer networks"],
    correcta: "b",
  },
  {
    id: 14,
    categoria: "jobs-in-tech",
    titulo: "Which role is responsible for protecting an organization’s systems from cyber-attacks?",
    opciones: ["A) IT Support Specialist", "B) Cybersecurity Specialist", "C) Project Manager"],
    correcta: "b",
  },
  {
    id: 15,
    categoria: "jobs-in-tech",
    titulo: "What do DevOps engineers primarily focus on?",
    opciones: ["A) Network management", "B) Overseeing project timelines", "C) Integrating software development and IT operations"],
    correcta: "c",
  },

  {
    id: 16,
    categoria: "programming-language",
    titulo: "What is a key feature of Java that enhances its portability?",
    opciones: [
      "A) It is a lightweight language.",
      "B) It runs on any device with a compatible Java Virtual Machine (JVM).",
      "C) It is primarily used for client-side scripting.",
    ],
    correcta: "b",
  },
  {
    id: 17,
    categoria: "programming-language",
    titulo: "Which programming paradigm does Java emphasize?",
    opciones: ["A) Functional programming", "B) Object-oriented programming", "C) Procedural programming"],
    correcta: "b",
  },
  {
    id: 18,
    categoria: "programming-language",
    titulo: "What is the primary use of JavaScript in web development?",
    opciones: [
      "A) Building enterprise applications",
      "B) Creating interactive and dynamic content on web pages",
      "C) Developing Android applications",
    ],
    correcta: "b",
  },
  {
    id: 19,
    categoria: "programming-language",
    titulo: "How has JavaScript expanded its functionality beyond client-side scripting?",
    opciones: ["A) By being integrated with Java", "B) Through frameworks like Spring", "C) With the advent of Node.js for server-side programming"],
    correcta: "c",
  },
  {
    id: 20,
    categoria: "programming-language",
    titulo: "In what scenario do Java and JavaScript complement each other effectively?",
    opciones: ["A) When creating static web pages", "B) In full-stack development and microservices architecture", "C) In mobile app development"],
    correcta: "b",
  },
];

// Tomamos los elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

// Recupero el puntaje en caso de que ya esté jugando
let puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;
txtPuntaje.innerHTML = puntajeTotal;

// Cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
console.log(categoriaActual);
const preguntasCategoria = preguntas.filter((pregunta) => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num) {
  // Toma los elementos donde se cargarán los datos de la pregunta
  const { titulo, opciones } = preguntasCategoria[num];
  document.querySelector("#num-pregunta").innerHTML = num + 1;
  document.querySelector("#txt-pregunta").innerHTML = titulo;
  opciones.forEach((opcion, index) => {
    document.querySelector(`#${String.fromCharCode(97 + index)}`).innerHTML = opcion; // 'a', 'b', 'c', 'd'
  });

  // Agregar un event listener a cada botón de respuesta
  const botonesRespuesta = document.querySelectorAll(".opcion");
  botonesRespuesta.forEach((opcion) => {
    opcion.classList.remove("correcta", "incorrecta", "no-events");
    opcion.onclick = agregarEventListenerBoton;
  });

  txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e) {
  const respuestaSeleccionada = e.currentTarget.id;
  const respuestaCorrecta = preguntasCategoria[numPreguntaActual].correcta;

  // Controlar si la respuesta es correcta
  if (respuestaSeleccionada === respuestaCorrecta) {
    e.currentTarget.classList.add("correcta");
    puntajeTotal += 100;
    txtPuntaje.innerHTML = puntajeTotal;
    localStorage.setItem("puntaje-total", puntajeTotal);
    txtPuntaje.classList.add("efecto");
  } else {
    e.currentTarget.classList.add("incorrecta");
    document.querySelector(`#${respuestaCorrecta}`).classList.add("correcta");
  }

  // Desactivar los botones para evitar múltiples clics
  document.querySelectorAll(".opcion").forEach((opcion) => {
    opcion.classList.add("no-events");
  });
}

// Cargar la primera pregunta
cargarSiguientePregunta(numPreguntaActual);

// Tomar el botón siguiente
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
  if (++numPreguntaActual < preguntasCategoria.length) {
    cargarSiguientePregunta(numPreguntaActual);
  } else {
    const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas")) || [];
    location.href = categoriasJugadasLS.length < 4 ? "menu.html" : "final.html";
  }
});
