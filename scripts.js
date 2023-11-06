document.addEventListener('DOMContentLoaded', function (create) {
    const cardlist = document.querySelectorAll(".cards");
    const subscribe = document.querySelectorAll('button');
    const msg = document.getElementsByClassName("message");
    var email = document.getElementById("email");

    cardlist.forEach((card, index) => {
        card.classList.add('card');
    })

    subscribe[0].addEventListener('click', function (e) {
        e.preventDefault();
        if (email.value == "") {
            msg[0].textContent = "Please enter a valid email address.";
        } else {
            msg[0].textContent = `Thank you! Your email address '${email.value}' has been added to our mailing list!`;
            
        }

    })


})