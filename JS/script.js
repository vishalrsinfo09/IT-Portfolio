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
