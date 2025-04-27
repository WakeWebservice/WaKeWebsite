'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll-Triggered Animationen ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (!animatedElements.length) return; // Beenden, wenn keine Elemente da sind

    const observerOptions = {
        root: null, // Beobachtet im Verhältnis zum Viewport
        rootMargin: '0px',
        threshold: 0.1 // Element wird als "sichtbar" betrachtet, wenn 10% im Viewport sind
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Wenn das Element in den Viewport kommt
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Beobachtung beenden, nachdem die Animation einmal ausgelöst wurde
                observer.unobserve(entry.target);
            }
            // Optional: Wenn du willst, dass die Animation rückgängig gemacht wird,
            // wenn das Element wieder aus dem Viewport verschwindet:
            // else {
            //     entry.target.classList.remove('is-visible');
            // }
        });
    };

    // Erstelle den Intersection Observer
    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Beobachte jedes zu animierende Element
    animatedElements.forEach(el => {
        intersectionObserver.observe(el);
    });

    // --- Optional: Weitere JS-basierte Interaktionen/Animationen könnten hier hin ---
    // Beispiel: Ein komplexerer Parallax-Effekt oder ein Custom Cursor

    console.log("Website initialisiert und Animationen bereit.");

    });

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Aktuelle Scrollposition
    const windowHeight = window.innerHeight; // Höhe des Viewports
    const documentHeight = document.body.scrollHeight; // Gesamthöhe der Seite

    // Berechne den Scroll-Fortschritt (0 bis 1)
    const scrollProgress = scrollPosition / (documentHeight - windowHeight);

    // Dynamischer Winkel für den Farbverlauf (0° = vertikal, 90° = horizontal)
    const angle = 90 * (1 - scrollProgress); // Winkel von 0° bis 90°

    // Setze den Hintergrund mit dem dynamischen Winkel
    document.body.style.background = `linear-gradient(${angle}deg, rgb(212, 206, 173) 50%, black 50%)`;
});

/*const element = document.querySelector('.portfolio-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.stlye.transform = 'translateX(0)';
        } else {
            entry.target.style.transform = '';
        }
    });
}, {
    root: null,
    threshold: 0.1
});

observer.observe(element); */