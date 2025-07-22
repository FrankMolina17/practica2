document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (nombre === '' || email === '' || password === '') {
        mensaje.textContent = 'Por favor, completa todos los campos.';
        mensaje.style.color = '#dc3545';
        return;
    }

    mensaje.textContent = '¡Registro exitoso!';
    mensaje.style.color = '#28a745';
    this.reset();
});
