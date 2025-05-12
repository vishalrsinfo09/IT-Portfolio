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

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // 30% dikhne par trigger karega
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter("count1", 250);
                animateCounter("count2", 80);
                animateCounter("count3", 250);
                animateCounter("count4", 75);
                observer.unobserve(entry.target); // Ek hi baar chalaye
            }
        });
    }, options);

    const targetSection = document.querySelector('[data-aos="fade-up"]');
    if (targetSection) {
        observer.observe(targetSection);
    }
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

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    console.log("Current Path:", currentPath);

    document.querySelectorAll(".nav-link-custom").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});



