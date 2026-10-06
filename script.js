// Google Apps Script Web App URL
const scriptURL = "PASTE_YOUR_WEB_APP_URL_HERE";

// Get the form
const form = document.getElementById("contactForm");

// When the form is submitted
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get the values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let contact = document.getElementById("contact").value;
    let message = document.getElementById("message").value;

    // Display the information on HTML page
    document.getElementById("displayInfo").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Gender: " + gender + "<br>" +
        "Contact Number: " + contact + "<br>" +
        "Message: " + message;

    // Send data to Google Sheets
    fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({
            name: name,
            email: email,
            gender: gender,
            contact: contact,
            message: message
        })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        alert("Your information has been saved!");

        // Clear the form
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error saving your information.");
    });

});
