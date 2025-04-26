document.addEventListener("DOMContentLoaded", function() {
    // Securiser formulaire si existe
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");

    if (form && message) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || email === "") {
                message.textContent = "Veuillez remplir tous les champs.";
                message.style.color = "red";
                return;
            }

            message.textContent = "Merci pour votre inscription, " + name + " !";
            message.style.color = "green";
            form.reset();
        });
    }

    // Script Menu Hamburger
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function() {
            menu.classList.toggle("show");
        });
    }
});
