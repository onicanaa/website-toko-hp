
document.getElementById('formPengiriman').addEventListener('submit', function(e) {
    e.preventDefault(); // Cegah reload halaman

    const form = e.target;
    const data = new FormData(form);

    fetch('proses_kirim.php', {
        method: 'POST',
        body: data
    })
    .then(response => {
        if (!response.ok) throw new Error('Gagal mengirim data');
        return response.text(); // atau .json() tergantung respons PHP
    })
    .then(result => {
        // Tampilkan pesan berhasil
        document.getElementById('status-pesanan').style.display = 'block';
        form.reset(); // Reset form setelah berhasil
    })
    .catch(error => {
        alert('Terjadi kesalahan: ' + error.message);
    });
});

