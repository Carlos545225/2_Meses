document.addEventListener('DOMContentLoaded', () => {

    const heartButton = document.getElementById('heart-button');
    const initialScreen = document.getElementById('initial-screen');
    const mainContent = document.getElementById('main-content');
    const backgroundMusic = document.getElementById('background-music');
    const heartsContainer = document.querySelector('.hearts-container');
    const bouquetContainer = document.getElementById('bouquet-container');

    // --- Lógica de corazones flotantes ---
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 10 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 15000);
    }, 500);

    // --- GENERACIÓN DEL RAMO DE ROSAS ---
    const roseCount = 23;

    function createBouquet() {
        for (let i = 0; i < roseCount; i++) {
            const rose = document.createElement('div');
            rose.classList.add('rose');
            const rotation = Math.random() * 50 - 25;
            const scale = Math.random() * 0.3 + 0.9;
            const xPos = Math.random() * 120 - 60;
            rose.style.setProperty('--rose-rotation', `${rotation}deg`);
            rose.style.setProperty('--rose-scale', scale);
            rose.style.transform = `translateX(${xPos}px)`;
            rose.style.zIndex = i;
            rose.style.animationDelay = `${i * 0.08}s`;
            const stem = document.createElement('div');
            stem.classList.add('stem');
            const leaves = document.createElement('div');
            leaves.classList.add('leaves');
            const leaf1 = document.createElement('div');
            leaf1.classList.add('leaf', 'leaf1');
            const leaf2 = document.createElement('div');
            leaf2.classList.add('leaf', 'leaf2');
            leaves.append(leaf1, leaf2);
            const petals = document.createElement('div');
            petals.classList.add('petals');
            const backPetals = ['pb-1', 'pb-2', 'pb-3'].map(cls => { const p = document.createElement('div'); p.classList.add('petal', 'petal-back', cls); return p; });
            const midPetals = ['pm-1', 'pm-2'].map(cls => { const p = document.createElement('div'); p.classList.add('petal', 'petal-mid', cls); return p; });
            const frontPetals = ['pf-1', 'pf-2', 'pf-3'].map(cls => { const p = document.createElement('div'); p.classList.add('petal', 'petal-front', cls); return p; });
            petals.append(...backPetals, ...midPetals, ...frontPetals);
            rose.append(stem, leaves, petals);
            bouquetContainer.appendChild(rose);
        }
    }

    // --- Lógica principal del botón ---
    heartButton.addEventListener('click', () => {
        initialScreen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        initialScreen.style.opacity = '0';
        initialScreen.style.transform = 'scale(0.8)';
        setTimeout(() => { initialScreen.style.display = 'none'; }, 500);
        mainContent.classList.remove('hidden');
        createBouquet();
        backgroundMusic.play().catch(error => { console.log("El navegador bloqueó la reproducción automática: ", error); });
    });
});