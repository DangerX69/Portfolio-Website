document.getElementById("ajax-contact").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send the form data to EmailJS
    emailjs.send("service_mfi89a7", "template_017zi8n", formData)
        .then(function(response) {
            // Handle success
            document.getElementById("form-messages").textContent = "Message sent successfully!";
            document.getElementById("form-messages").classList.remove("error");
            document.getElementById("form-messages").classList.add("success");

            // Clear the form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }, function(error) {
            // Handle error
            document.getElementById("form-messages").textContent = "Oops! Something went wrong.";
            document.getElementById("form-messages").classList.remove("success");
            document.getElementById("form-messages").classList.add("error");
        });
});