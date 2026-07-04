function pulse() {
    const element = document.getElementById('pulse');

    // Slight zoom range: 0.95 → 1.05
    const randomScale = Math.random() * (1.05 - 0.95) + 0.95;
    element.style.transform = `scale(${randomScale})`;

    // Random rhythm: 800ms → 2500ms
    const randomTime = Math.random() * 2500 + 800;

    setTimeout(pulse, randomTime);
}

pulse();
