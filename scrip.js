document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const correctUsername = "admin";
    const correctPassword = "1234";

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });

    form.addEventListener('submit', function(e) {

        document.getElementById('userLogin').textContent = username;
        document.getElementById('userPassword').textContent = password;

        // Foydalanuvchi tekshiruvi
        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
            window.location.href = "dashboard.html";
        } else {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Login yoki parol noto‘g‘ri terilgan!";
        }
    });
});