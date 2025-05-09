function animateCounter(id, target, speed) {
    let count = 0;
    const counter = document.getElementById(id);
    const stepTime = Math.floor(speed / target);

    const interval = setInterval(() => {
        count++;
        counter.innerText = count;
        if (count >= target) clearInterval(interval);
    }, stepTime);
}

animateCounter("count1", 50, 2400);
animateCounter("count2", 20, 2500);
animateCounter("count3", 500, 900); 

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
