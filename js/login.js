document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Modal elements
    const modalLupaPassword = document.getElementById('modalLupaPassword');
    const modalDaftar = document.getElementById('modalDaftar');
    const lupaPasswordBtn = document.getElementById('lupaPasswordBtn');
    const daftarBtn = document.getElementById('daftarBtn');
    const closeLupaPassword = document.getElementById('closeLupaPassword');
    const closeDaftar = document.getElementById('closeDaftar');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Check against dataPengguna from data.js
        const user = dataPengguna.find(u => u.email === email && u.password === password);

        if (user) {
            // Valid login
            // For a real app, we might store a session token. Here we just redirect.
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'dashboard.html';
        } else {
            // Invalid login - EXACT requirement message
            alert('email/password yang anda masukkan salah');
        }
    });

    // Modal logic
    lupaPasswordBtn.addEventListener('click', () => {
        modalLupaPassword.style.display = 'flex';
    });

    daftarBtn.addEventListener('click', () => {
        modalDaftar.style.display = 'flex';
    });

    closeLupaPassword.addEventListener('click', () => {
        modalLupaPassword.style.display = 'none';
    });

    closeDaftar.addEventListener('click', () => {
        modalDaftar.style.display = 'none';
    });

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modalLupaPassword) {
            modalLupaPassword.style.display = 'none';
        }
        if (e.target === modalDaftar) {
            modalDaftar.style.display = 'none';
        }
    });
});
