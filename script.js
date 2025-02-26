function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const sender = document.querySelector('.message');
const send = document.getElementById('send');
const content =document.getElementsByClassName('textarea');
function store(event) {
    event.preventDefault();

    let name = document.querySelector(".message").value.trim();
    let email = document.querySelector(".email").value.trim();
    let message = document.querySelector(".textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields before submitting.");
    } else {
        alert("Thank you for your feedback!");
        document.querySelector("form").submit();
        // Here you can proceed with form submission, e.g., sending data to a server.
    }
}