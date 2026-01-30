// Page Transitions
function navigateTo(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 1000); // 1s transition matching CSS
}

// Talents Page Logic
const contentData = {
    singer: {
        type: 'audio',
        src: 'assets/placeholder_song.m4a', // UPLOAD YOUR AUDIO HERE matching this filename
        text: 'Singing her heart out! 🎤🎶'
    },
    artist: {
        type: 'image',
        src: 'assets/placeholder.svg', // UPLOAD YOUR ART IMAGE HERE
        text: 'Your masterpieces inspire everyone.'
    },
    coder: {
        type: 'html',
        html: '<h3>Codder & Topper!</h3><h1 style="font-size: 3rem; color: var(--accent-1); margin: 10px 0;">9.4 CGPA</h1><p>Building the future, one line of code at a time.<br><br><strong>You need anything else to prove that? 😎</strong></p>'
    },
    actor: {
        type: 'video',
        src: 'assets/placeholder_video.mp4', // UPLOAD YOUR VIDEO HERE matching this filename
        text: 'Capturing hearts on screen.'
    },
    dancer: {
        type: 'html',
        html: '<h1 style="font-size: 2.5rem; color: var(--accent-3);">Too Fast for 4K! ⚡</h1><p style="font-size: 1.2rem; margin-top: 15px;">The world isn\'t ready for these moves yet. 😉<br>(But we all know who owns the dance floor! 💃)</p><div style="font-size: 4rem; margin-top: 20px; animation: bounce 1s infinite;">💃✨🎶</div>'
    }
};

function showContent(category) {
    const overlay = document.getElementById('overlay');
    const container = document.getElementById('media-content');
    const data = contentData[category];

    if (!overlay || !container || !data) return;

    // Reset buttons
    document.querySelectorAll('.talent-btn').forEach(b => b.classList.remove('active'));
    // Highlight active
    const btn = document.querySelector(`button[onclick="showContent('${category}')"]`);
    if (btn) btn.classList.add('active');

    let htmlContent = '';

    if (data.type === 'audio') {
        htmlContent = `
            <h3>${data.text}</h3>
            <br>
            <audio controls style="width: 100%">
                <source src="${data.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
    } else if (data.type === 'image') {
        htmlContent = `
            <h3>${data.text}</h3>
            <img src="${data.src}" alt="Art">
        `;
    } else if (data.type === 'video') {
        htmlContent = `
            <h3>${data.text}</h3>
            <video controls autoplay>
                <source src="${data.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (data.type === 'html') {
        htmlContent = data.html;
    }

    container.innerHTML = htmlContent;
    overlay.classList.add('visible');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        // Stop audio/video
        const container = document.getElementById('media-content');
        container.innerHTML = '';
    }


    document.querySelectorAll('.talent-btn').forEach(b => b.classList.remove('active'));
}

// Auto Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Start slideshow if slides exist
if (slides.length > 0) {
    setInterval(nextSlide, 3000); // Change every 3 seconds
}
