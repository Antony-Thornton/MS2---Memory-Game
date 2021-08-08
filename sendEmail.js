function sendMail(contactForm) {
email.js.send("gmail_account", "memory_game", {
    "first_name": contactForm.firstname.value,
    "last_name": contactForm.surname.value,
    "message": contactForm.message.value,
    "email": contactForm.email.value
})
.then(
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    });

    return false;
}