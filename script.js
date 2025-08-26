const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// ✅ Cek apakah sudah login, kalau iya langsung ke beranda
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    window.location.href = "menu.html";
}

// ============================
// FUNGSI REGISTRASI
// ============================
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("registerUsername").value.trim();
        const password = document.getElementById("registerPassword").value.trim();

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("loggedInUser", username);

        alert("Registrasi berhasil! Selamat datang, " + username + " 🎉");
        window.location.href = "menu.html";
    });
}

// ============================
// FUNGSI LOGIN
// ============================
if (loginForm) {
    const savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("rememberMe").checked = true;
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const rememberMe = document.getElementById("rememberMe").checked;

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem("loggedInUser", username);

            if (rememberMe) {
                localStorage.setItem("savedUsername", username);
            } else {
                localStorage.removeItem("savedUsername");
            }

            alert("Login berhasil! Selamat datang, " + username + " 🎉");
            window.location.href = "menu.html";
        } else {
            alert("Username atau password salah!");
        }
    });
}