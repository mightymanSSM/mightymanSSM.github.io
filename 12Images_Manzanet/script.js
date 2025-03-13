document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "images/image1.jpeg",
        "images/image2.jpeg",
        "images/image3.jpeg",
        "images/image4.jpeg",
        "images/image5.jpeg",
        "images/image6.jpeg",
        "images/image7.jpeg",
        "images/image8.jpeg",
        "images/image9.jpeg",
        "images/image10.jpeg",
        "images/image11.jpeg",
        "images/image12.jpeg"
    ];

    const texts = [
        "The geezers are prepared to take the stage for the first time in years.",
        "As the opening monologue begins, Manny (the one in the purple shirt) is overwhelmed with excitement and nerves. It’s been too long.",
        "The ultimate game of rock paper scissors to decide who goes first. The geezers or the whippersnappers?",
        "I lost. Best 2 out of 3?",
        "I must go first in the epic debate game. My argument: age is beauty.",
        "My first scene. I’m a janitor trying to keep the city clean whilst these tourists make a huge commotion in the downtown area.",
        "Second scene. I’m a one-eyed gorilla trying to replace one of Hollywood’s best actors.",
        "There’s too much at stake. This is where I start to lose the crowd.",
        "My scene partner and former captain, Jimmy reminds me: if you’re gonna fail, fail big.",
        "I resurrect the scene by turning the director into a mad gorilla.",
        "Closing remarks from our MC, Alan.",
        "Two generations of performers, united through improvised storytelling."
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById("current-image");
    const textOverlay = document.getElementById("text-overlay");

    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            // Scroll down (next image)
            if (currentIndex < images.length - 1) {
                currentIndex++;
            }
        } else {
            // Scroll up (previous image)
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        // Fade effect
        imageElement.style.opacity = 0;
        textOverlay.style.opacity = 0;

        setTimeout(() => {
            imageElement.src = images[currentIndex];
            textOverlay.textContent = texts[currentIndex];
            imageElement.style.opacity = 1;
            textOverlay.style.opacity = 1;
        }, 300); // Wait for fade-out before changing
    });
});
