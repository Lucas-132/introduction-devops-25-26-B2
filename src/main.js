import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <header class="hero">
        <h1>🚀 Le Produit Incroyable</h1>
        <p>La solution simple pour améliorer votre quotidien</p>
        <a href="#acheter" class="btn">Acheter maintenant</a>
    </header>

    <section class="features">
        <h2>Pourquoi choisir notre produit ?</h2>
        <div class="feature-list">
            <div class="feature">
                <h3>✔ Facile à utiliser</h3>
                <p>Aucune compétence requise, tout est prêt.</p>
            </div>
            <div class="feature">
                <h3>⚡ Rapide</h3>
                <p>Des résultats visibles immédiatement.</p>
            </div>
            <div class="feature">
                <h3>💎 Qualité premium</h3>
                <p>Conçu avec soin pour durer dans le temps.</p>
            </div>
        </div>
    </section>

    <section class="pricing" id="acheter">
        <h2>Offre spéciale</h2>
        <p class="price">29,99 €</p>
        <p class="old-price">au lieu de 49,99 €</p>
        <a href="#" class="btn">Commander maintenant</a>
    </section>

    <footer>
        <p>© 2026 - Produit Incroyable. Tous droits réservés.</p>
    </footer>
  </div>
`;

setupCounter(document.querySelector('#counter'));
