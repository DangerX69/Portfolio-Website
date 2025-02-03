const btn = document.getElementById('submit_button');

document.getElementById('ajax-contact')
 .addEventListener('submit', function(event) {
   event.preventDefault();

  
   const serviceID = 'service_mfi89a7';
   const templateID = 'template_017zi8n';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
		document.getElementById("form-messages").textContent = "Message sent successfully!";
		document.getElementById("form-messages").classList.remove("error");
		document.getElementById("form-messages").classList.add("success");

		// Clear the form fields
		document.getElementById("from_name").value = "";
		document.getElementById("from_email").value = "";
		document.getElementById("message").value = "";
      
    }, (err) => {
		document.getElementById("form-messages").textContent = "Oops! Something went wrong.";
		document.getElementById("form-messages").classList.remove("success");
		document.getElementById("form-messages").classList.add("error");
      alert(JSON.stringify(err));
    });
});
