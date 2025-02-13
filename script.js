document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("input[name='name']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();
    let message = document.querySelector("textarea[name='message']").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    fetch(this.action, {
        method: "POST",
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            this.reset();
        } else {
            formMessage.textContent = "Something went wrong. Try again.";
            formMessage.style.color = "red";
        }
    });
});


window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
