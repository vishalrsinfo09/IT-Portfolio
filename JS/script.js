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
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter("count1", 250);
                animateCounter("count2", 80);
                animateCounter("count3", 250);
                animateCounter("count4", 75);
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    const targetSection = document.querySelector('[data-aos="fade-up"]');
    if (targetSection) {
        observer.observe(targetSection);
    }
};



