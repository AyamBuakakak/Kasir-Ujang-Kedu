document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;

    if (password !== confirmPassword) {
        alert("Password tidak cocok!");
        return;
    }

    const user = {
        name,
        email,
        password
    };

    // Simpan ke localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = 'Menu.html';
});