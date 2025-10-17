// Fungsi untuk scroll ke bagian tertentu
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Tambahkan interaksi animasi kecil
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#111';
    } else {
        header.style.backgroundColor = '#222';
    }
});
