function animateCounter(id, target) {
    let count = 0;
    const interval = setInterval(() => {
        if (count >= target) {
            clearInterval(interval);
            return;
        }
        count++;
        document.getElementById(id).innerText = count;
    }, 20);
}

window.onload = () => {
    AOS.init();
    animateCounter("count1", 250);
    animateCounter("count2", 80);
    animateCounter("count3", 250);
    animateCounter("count4", 75);
};



function data() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    if (name === "" || email === "" || phone === "" || address === "") {
        alert("All fields are mandatory!");
        return false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number should be exactly 10 digits and numeric!");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
AOS.init();


const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link-custom');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});



