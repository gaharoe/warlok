const token = localStorage.getItem('token');
fetch('/beranda', {
    headers: {
        auth: `Bearer ${token}`
    }
});