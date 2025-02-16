document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");

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
});
