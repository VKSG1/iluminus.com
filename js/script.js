// Resaltar página activa en el menú
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

// Efecto de resaltado en las secciones al hacer scroll
    // Resaltado de secciones al hacer scroll usando IntersectionObserver

    // Seleccionamos todas las secciones que deben tener el efecto de resaltado
    const sections = document.querySelectorAll('.highlightable');

    // Creamos el observador que detecta si una sección está visible en el viewport
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

    // Si la sección está al menos 50% visible, se activa el resaltado
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {

    // Si deja de estar visible, se quita el resaltado
      entry.target.classList.remove('active');
    }
  });
}, {
    threshold: 0.5 // Porcentaje mínimo visible para activar el efecto
});

    // Activamos el observador para cada sección seleccionada
    sections.forEach(section => observer.observe(section));


// Validación del formulario de presupuesto
document.addEventListener('DOMContentLoaded', function() {
    const formPresupuesto = document.getElementById('form-presupuesto');
    
    if (formPresupuesto) {
        formPresupuesto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const informacion = document.getElementById('informacion').value.trim();
            const privacidad = document.getElementById('privacidad').checked;
            
            let isValid = true;
            
            // Validar nombre
            if (nombre === '') {
                isValid = false;
                alert('Por favor, ingrese su nombre.');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                alert('Por favor, ingrese un email válido.');
                return;
            }
            
            // Validar teléfono
            if (telefono === '') {
                isValid = false;
                alert('Por favor, ingrese su teléfono.');
                return;
            }
            
            // Validar información
            if (informacion === '') {
                isValid = false;
                alert('Por favor, ingrese la información solicitada.');
                return;
            }
            
            // Validar política de privacidad
            if (!privacidad) {
                isValid = false;
                alert('Debe aceptar la Política de Privacidad para enviar el formulario.');
                return;
            }
            
            // Si todo es válido, enviar formulario
            if (isValid) {
                alert('¡Formulario enviado correctamente! Nos pondremos en contacto con usted pronto.');
                formPresupuesto.reset();
            }
        });
    }
}); 