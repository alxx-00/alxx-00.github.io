document.addEventListener("DOMContentLoaded", () => {
  const forms = ["clienteForm", "vehiculoForm", "citaForm"];
  forms.forEach(id => {
    const form = document.getElementById(id);
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (form.checkValidity()) {
        alert("Formulario enviado correctamente.");
        form.reset();
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  });
});
