function personalizeCard() {
    const recipientName = document.getElementById('recipient-name').value;
    const senderName = document.getElementById('sender-name').value;

    document.getElementById('recipient').textContent = recipientName;
    document.getElementById('sender').textContent = senderName;
}

function showCard() {
    personalizeCard();
    const messageContent = document.getElementById('message-content').value;
    const card = document.querySelector('.card');
    const personalMessage = document.getElementById('personal-message');
    const uploadedImage = document.getElementById('uploaded-image');
    const cardContainer = document.getElementById('card-container');

    personalMessage.textContent = messageContent;
    cardContainer.classList.remove('hidden');
    card.style.display = 'block';

    const fileInput = document.getElementById('image-upload');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.classList.remove('hidden');
        }
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        uploadedImage.classList.add('hidden');
    }
}

function revealMessage() {
    const revealContainer = document.getElementById('reveal-container');
    revealContainer.classList.remove('hidden');
    document.getElementById('click-message').classList.add('hidden');
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
