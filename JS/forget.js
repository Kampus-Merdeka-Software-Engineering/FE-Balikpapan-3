// Function to validate the reset password form
function validateForm() {
    var email = document.getElementById("emailInput").value;

    // Validasi Email
    if (!email || email.trim() === "") {
        alert("Email harus diisi.");
        return false;
    }

     // Validasi "@" dan "."
     if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Email harus berisi karakter '@' dan '.'.");
        return false;
     }

    // Jika semua validasi berhasil, Anda dapat melanjutkan dengan proses reset password
     //pindah ke halaman selanjutnya
     window.location.href= "login.html";
}

// Menambahkan event listener untuk tombol Submit
var submitButton = document.getElementById("Submit");
submitButton.addEventListener("click", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
    }
});
