// Sayfa yüklendiğinde çalışacak etkileşim kodları
document.addEventListener("DOMContentLoaded", function () {
    console.log("devekusuyumurtasi.com SEO ve Responsive optimizasyonları ile yüklendi.");

    // Ürün kartları üzerine gelindiğinde ufak görsel efekt
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#25d366';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
});