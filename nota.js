// Ambil elemen yang dibutuhkan
const form = document.getElementById('belanjaForm');
const namaBarang = document.getElementById('namaBarang');
const hargaBarang = document.getElementById('hargaBarang');
const jumlahBarang = document.getElementById('jumlahBarang');
const notaTableBody = document.querySelector('#notaTable tbody');
const totalBelanja = document.getElementById('totalBelanja');
const resetButton = document.getElementById('resetNota');
const cetakButton = document.getElementById('cetakNota');

let total = 0;

// Event ketika form disubmit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const nama = namaBarang.value.trim();
    const harga = parseInt(hargaBarang.value);
    const jumlah = parseInt(jumlahBarang.value);

    if (!nama || isNaN(harga) || isNaN(jumlah) || harga < 0 || jumlah < 0) {
        alert('Silakan masukkan data yang valid.');
        return;
    }

    const subtotal = harga * jumlah;
    total += subtotal;

    // Tambah baris ke tabel
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${nama}</td>
        <td>Rp ${harga.toLocaleString()}</td>
        <td>${jumlah}</td>
        <td>Rp ${subtotal.toLocaleString()}</td>
    `;
    notaTableBody.appendChild(row);

    // Update total belanja
    totalBelanja.textContent = total.toLocaleString();

    // Reset input
    form.reset();
    namaBarang.focus();
});

// Event untuk tombol reset
resetButton.addEventListener('click', function () {
    if (confirm("Apakah Anda yakin ingin mereset nota?")) {
        notaTableBody.innerHTML = '';
        total = 0;
        totalBelanja.textContent = '0';
    }
});

// Event untuk tombol cetak
cetakButton.addEventListener('click', function () {
    window.print();
});
