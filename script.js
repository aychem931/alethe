function pulse() {
    const element = document.getElementById('pulse');
    // Erratic, living heartbeat effect
    const randomOpacity = Math.random() * (1 - 0.3) + 0.3;
    element.style.opacity = randomOpacity;
    
    // Varying the rhythm to feel less mechanical
    const randomTime = Math.random() * 2500 + 800;
    setTimeout(pulse, randomTime);
}
pulse();