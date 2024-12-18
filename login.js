const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
if (username === 'admin@example.com' && password === '123456') {
window.location.href = 'index.html';
} else {
alert('Credenciais inválidas!');
}
});