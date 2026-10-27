// 1. Fitur Switch Tema Cerah / Gelap
function toggleTheme() {
    const htmlTag = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    
    // Cek tema saat ini
    const currentTheme = htmlTag.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        htmlTag.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '☀️ Mode Cerah';
    } else {
        htmlTag.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '🌙 Mode Gelap';
    }
}

// 2. Fungsi Mengubah Teks
function changeText() {
    document.getElementById('halo').innerHTML = 'Hello JavaScript (via Function)!';
}

// 3. Fungsi Menangkap Data Form
function kirimData(event) {
    event.preventDefault(); // Mencegah reload halaman

    var nama = document.getElementById('nama').value;
    var umur = document.getElementById('umur').value;

    alert("Data Berhasil Dikirim:\nNama: " + nama + "\nUmur: " + umur + " tahun");

    document.getElementById('hasil').innerHTML = 
        "✨ Output: Nama " + nama + " (" + umur + " tahun)";
}