document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById("welcome-message");
    const experienceBox = document.getElementById("experience-box");

    welcomeMessage.classList.add("fade-in");
    setTimeout(() => {
        welcomeMessage.classList.add("fade-out");
        setTimeout(() => {
            experienceBox.classList.add("slide-in");
        }, 2000); // Wait for fade-out to complete
    }, 5000); // 5 seconds
});
