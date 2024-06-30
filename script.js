console.log("conneted")


setTimeout(function () {
    const content = document.querySelector('.content');
    content.classList.add('loaded'); // Add 'loaded' class to trigger animation
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; // Hide the loader after animation
}, 1500);




document.addEventListener('DOMContentLoaded', () => {
    const strings = ["Love.", "Pannu.", "Baby girl.", "Sweetheart.", "Cutiepie."];
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 60; // Time in milliseconds between each character
    const pauseTime = 2000; // Time in milliseconds to pause between strings
    const typingElement = document.getElementById('typing');

    function type() {
        if (currentCharIndex < strings[currentStringIndex].length) {
            typingElement.textContent += strings[currentStringIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseTime);
        }
    }

    function erase() {
        if (currentCharIndex > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(erase, typingSpeed);
        } else {
            currentStringIndex = (currentStringIndex + 1) % strings.length;
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typing effect
    type();
});






document.addEventListener('DOMContentLoaded', () => {
    const strings = [`Happy one year anniversary! It feels like just yesterday we were Talking and confessed eachother and my ears are burning like i have fever , and here we are, celebrating a whole year of us. This past year has flown by in a whirlwind of wonderful moments. From confessing our love to desire we have, to simply chatting about space, stars melting in eachother arms kissing and hugging , every moment with you has been a treasure. You have a way of making even the ordinary feel extraordinary. Thank you for being my Lover, my Comfort and my biggest supporter. You make me smile more than anyone else, and your presence brings a sense of calm and joy to my life that I never knew I needed. Looking back, I can't believe how much we've grown together. We've learned each other's quirks, celebrated each other's achievements, and been there for each other through thick and thin. You inspire me to be a better person, and I cherish the way we challenge and encourage each other. As we embark on year two of our adventure together, I'm filled with excitement for what the future holds. There are countless adventures waiting for us, and I can't wait to face them all by your side. Happy anniversary, my love. Here's to eternity of laughter, love, and growing together. With all my love, I love youuuu so muccch, I will always stay with youu, I will alwayss lovee youuu in the same way, You are my lover of eternity 😚. I lovee youuu alott 😚, hugss you tightlyyy.Baby hope you like this gift of mine. Your Deepu. 😚😚😚💕💕💕`];
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 60; // Time in milliseconds between each character
    const pauseTime = 100000; // Time in milliseconds to pause between strings
    const typingElement = document.getElementById('letter');

    function type() {
        if (currentCharIndex < strings[currentStringIndex].length) {
            typingElement.textContent += strings[currentStringIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseTime);
        }
    }

    function erase() {
        if (currentCharIndex > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(erase, typingSpeed);
        } else {
            currentStringIndex = (currentStringIndex + 1) % strings.length;
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typing effect
    type();
});






