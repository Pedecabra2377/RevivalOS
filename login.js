const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

fetch('accounts.txt')
.then(response => response.text())
.then(data => {
const accounts = data.split('---');
const accountData = accounts.find(account => {
const lines = account.split('\n');
const email = lines.find(line => line.startsWith('email=')).split('=')[1].trim();
const pwd = lines.find(line => line.startsWith('password=')).split('=')[1].trim();

```    return email === username && pwd === password;
  });

  if (accountData) {
    window.open('index.html', '_self');
  } else {
    window.open('error.html', '_self');
  }
})
.catch(error => console.error(error));
```
});