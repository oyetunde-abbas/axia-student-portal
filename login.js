document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
if (username.length < 5) {
alert('Student ID must be at least 5 characters');
return;
}
if (password.length < 8) {
alert('Password must be at least 8 characters');
return;
}
alert('Login successful!');
});