document.addEventListener("DOMContentLoaded", function() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 0.1}s`;
    });

    const surpriseButton = document.getElementById('surprise-button');
    const surpriseCard = document.getElementById('surprise-card');

    surpriseButton.addEventListener('click', function() {
        surpriseCard.classList.remove('hidden');
        setTimeout(() => {
            surpriseCard.style.opacity = '1';
            launchConfetti();
        }, 500); // Adjust the delay as needed
    });

    function launchConfetti() {
        var end = Date.now() + 5 * 1000;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});
