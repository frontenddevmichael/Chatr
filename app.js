// Simple chat functionality for demo
function sendMessage() {
    const input = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('chatMessages');

    if (input.value.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.innerHTML = `
            <div class="message-avatar avatar-sophia">S</div>
            <div class="message-content">
                <div class="message-sender">
                    You <span class="time">${getCurrentTime()}</span>
                </div>
                <div class="message-bubble sent">${input.value}</div>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        input.value = '';

        // Auto-scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Auto-reply after 1 second (for demo purposes)
        setTimeout(() => {
            const autoReply = document.createElement('div');
            autoReply.className = 'message';
            autoReply.innerHTML = `
                <div class="message-avatar avatar-liam">L</div>
                <div class="message-content">
                    <div class="message-sender">
                        Liam <span class="time">${getCurrentTime()}</span>
                    </div>
                    <div class="message-bubble received">Thanks for trying out Chatr! 🚀 Would you like me to show you some advanced features?</div>
                </div>
            `;
            messagesContainer.appendChild(autoReply);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
    }
}

function getCurrentTime() {
    const now = new Date();
    return now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
}

// Allow Enter key to send message
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Download button handler
function downloadApp() {
    alert('Download starting! This is a demo. In a real app, this would download the Chatr installer.');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers to buttons
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');

    if (primaryBtn) {
        primaryBtn.addEventListener('click', function () {
            alert('Welcome to Chatr! This is a demo interface.');
        });
    }

    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function () {
            alert('Learn more about Chatr\'s features and security.');
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
});

// Hide loader
function hideLoader() {
    const loader = document.querySelector('.loader-container');
    const overlay = document.querySelector('.loader-overlay');
    if (loader) loader.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
}

// Hide loader when page is fully loaded
window.addEventListener('load', function () {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.style.display = 'none';
    }
});