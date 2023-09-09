
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupFormBox = document.getElementById('signup-form-box');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    signupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupFormBox.style.display = 'block';
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupFormBox.style.display = 'none';
    });
});
