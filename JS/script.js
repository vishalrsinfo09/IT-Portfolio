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


AOS.init();
    
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.querySelector(".input-block-1").value.trim();
    const email = document.querySelector(".input-block-2").value.trim();
    const phone = document.querySelector(".input-block-3").value.trim();
    const message = document.querySelector(".input-block-4").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    status.style.color = "red";
    status.textContent = "";

    if (!name || !email || !emailPattern.test(email) || !phone || isNaN(phone) || phone.length < 10 || !message) {
      status.textContent = "❌ Submission failed: Please fill out all fields correctly.";
      return;
    }

    status.style.color = "green";
    status.textContent = "✅ Form submitted successfully!";
    form.reset(); 
  });
});

// const form = document.getElementById('subscribe-form');
//     const emailInput = document.getElementById('email');
//     const errorMessage = document.getElementById('error-message');

//     form.addEventListener('submit', function(e) {
//       e.preventDefault();
//       const email = emailInput.value;
//       const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


//       if (emailRegex.test(email)) {
//         errorMessage.textContent = '';
//         alert('Subscribed successfully!');
//         emailInput.value = '';
//       } else {
//         errorMessage.textContent = 'Please enter a valid email address.';
//       }
    // });
