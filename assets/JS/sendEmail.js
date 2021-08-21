function sendMail(contactForm) {
    emailjs.send("gmail_account", "memory_game", {

            first_name: contactForm.firstname.value,
            last_name: contactForm.surname.value,
            message: contactForm.message.value,
            email: contactForm.email.value
        })
        .then(
            function(response) {
                document.getElementById("firstname").value = "";
                document.getElementById("secondname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("confirmed_sent").innerText = "Thank you for completing the form. Someone will get back to you as soon as possible.";

            },
            function(error) {
                document.getElementById("confirmed_sent").innerText = "An error has occured please try again. If the error persists please contact Antony_thornton_p@outlook.com";
            });

    return false; // To block from loading a new page
}

/* Code beutified 20/08/2021 17:38 */
