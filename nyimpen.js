function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'Farrelzv' && password === '12345') {
        alert('Login successful');
        window.location.href = 'login.html';
    } else {
        alert('Login failed. Please check your username and password.');
    }
  }
  