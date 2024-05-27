function personalizeCard() {
    const recipientName = document.getElementById('recipient-name').value;
    const senderName = document.getElementById('sender-name').value;

    document.getElementById('recipient').textContent = recipientName;
    document.getElementById('sender').textContent = senderName;
}

// Function to create heart elements and animate them
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove the heart after it completes its animation
    }, 300); // Create a new heart every 300 milliseconds
}

createHearts();
