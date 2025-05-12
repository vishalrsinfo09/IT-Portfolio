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
    animateCounter("count1", 120);
    animateCounter("count2", 80);
    animateCounter("count3", 250);
};

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



