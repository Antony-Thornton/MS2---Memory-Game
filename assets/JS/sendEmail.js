function sendMail(contactForm) {
emailjs.send("gmail_account","memory_game",{
    
    first_name: contactForm.firstname.value,
    last_name: contactForm.surname.value,
    message: contactForm.message.value,
    email: contactForm.email.value
})
.then(
    function(response) {
        console.log("SUCCESS", response);
        document.getElementById("firstname").value = "";
        document.getElementById("secondname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    },
    function(error) {
        console.log("FAILED", error);
    });

    return false; // To block from loading a new page
}

