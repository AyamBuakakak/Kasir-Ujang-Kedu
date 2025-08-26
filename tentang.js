// Tampilkan catatan dokumentasi
function tampilkanDokumentasi() {
    const catatan = document.getElementById("catatanDokumentasi");

    if (catatan.classList.contains("hidden")) {
        catatan.classList.remove("hidden");
    } else {
        catatan.classList.add("hidden");
    }
}

// Tampilkan foto dokumentasi dengan animasi
function tampilkanFoto() {
    const foto = document.getElementById("fotoDokumentasi");

    if (foto.classList.contains("hidden")) {
        foto.classList.remove("hidden");
        foto.style.maxHeight = foto.scrollHeight + "px"; // buka foto
    } else {
        foto.style.maxHeight = "0"; // tutup foto
        setTimeout(() => {
            foto.classList.add("hidden");
        }, 500); // tunggu animasi selesai
    }
}