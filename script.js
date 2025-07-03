 // Toggle modo oscuro
document.getElementById("modo").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Validación de formulario de citas
document.getElementById("citaForm").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const detalle = document.getElementById("detalle").value.trim();

  if (!nombre || !email || !fecha || !hora || !detalle) {
    alert("Por favor, completa todos los campos.");
    e.preventDefault();
    return;
  }

  alert("Tu cita ha sido registrada. ¡Gracias por confiar en nosotros!");
});
