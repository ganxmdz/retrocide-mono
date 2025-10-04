// Matrix Rain Effect for Footer
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const container = document.getElementById('matrixRain');
    
    if (!container) return;
    
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    const chars = 'RETROCIDE0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px Retrocide, monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    });
}

// Glitch Effect Enhancement
function addGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (!glitchElement) return;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchElement.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00ff,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff,
                0 0 10px var(--neon-cyan),
                0 0 20px var(--neon-cyan)
            `;
            
            setTimeout(() => {
                glitchElement.style.textShadow = `
                    0 0 10px var(--neon-cyan),
                    0 0 20px var(--neon-cyan),
                    0 0 40px var(--neon-cyan),
                    0 0 80px var(--neon-cyan)
                `;
            }, 100);
        }
    }, 200);
}

// Typing Effect for Terminal
function typewriterEffect() {
    const features = document.querySelectorAll('.feature-line');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.animation = 'fadeIn 0.5s ease-in';
        }, index * 200);
    });
}

// Parallax Effect on Scroll - DISABLED
function parallaxScroll() {
    // Disabled to prevent overlapping blocks
}

// Random Neon Flicker
function neonFlicker() {
    const neonElements = document.querySelectorAll('.glitch, .section-title, .btn');
    
    setInterval(() => {
        neonElements.forEach(element => {
            if (Math.random() > 0.98) {
                element.style.opacity = '0.8';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        });
    }, 100);
}

// Cursor Trail Effect
function createCursorTrail() {
    const trail = [];
    const trailLength = 5;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '10000';
        dot.style.opacity = '0.6';
        dot.style.boxShadow = `0 0 10px ${dot.style.backgroundColor}`;
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.remove();
        }
        
        setTimeout(() => {
            dot.style.transition = 'opacity 0.5s';
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 500);
        }, 100);
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.demo-block, .use-case').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Konami Code Easter Egg
function konamiCode() {
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiSequence[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiSequence.length) {
                activateMatrixMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateMatrixMode() {
    document.body.style.animation = 'hueRotate 5s infinite';
    const style = document.createElement('style');
    style.textContent = `
        @keyframes hueRotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    addGlitchEffect();
    typewriterEffect();
    neonFlicker();
    createCursorTrail();
    animateOnScroll();
    konamiCode();
    
    // Parallax on scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(parallaxScroll);
    });
    
    // Console message for developers
    console.log('%cRETROCIDE', 'color: #00ffff; font-size: 48px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
    console.log('%cA monospaced font with no descenders by Orbit', 'color: #ff00ff; font-size: 16px;');
    console.log('%cTry the Konami Code: ↑↑↓↓←→←→BA', 'color: #00ffff; font-size: 14px;');
});