const texts = [
    "My dad and a 6 year old me the night of Halloween. Dad is showing me how to properly flex on the haters.",
    "This is my favorite photo of my dad and I. Looking back at it all these years later it warms my heart.",
    "When I was around this age I was playing tee-ball with my dad as a coach and to this day he tells me stories of how great of a ballplayer he was. This image to me represents how much I wanted to be like him.",
    "It’s interesting how I’m dressed like a superhero and my dad is still guiding me. All these years later, I still look to him in times of need no matter how 'super' I think I am.",
    "Strength is not measured in muscles, but in the heroes we inspire."
];

let index = 0;
document.getElementById('memoryImage').addEventListener('click', () => {
    index = (index + 1) % texts.length;
    document.getElementById('textBox').textContent = texts[index];
});
