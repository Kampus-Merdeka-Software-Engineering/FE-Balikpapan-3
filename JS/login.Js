function validateForm() {
    var email = document.getElementById("masukkanEmail").value;
    var password = document.getElementById("masukkanPassword").value;
    var checkbox = document.getElementById("flexcheckbox").checked;

    // Validasi Email
    if (!email || email.trim() === "") {
        alert("Email harus diisi.");
        return false;
    }

    // Validasi Password
    if (!password || password.trim() === "") {
        alert("Password harus diisi.");
        return false;
    }

    // Validasi Checkbox
    if (!checkbox) {
        alert("Harap setujui Remember Me.");
        return false;
    }

    // Jika semua validasi berhasil, Anda dapat melanjutkan dengan login
    //pindah ke halaman selanjutnya
    window.location.href= "halaman-utama.html";
}


// Add an event listener to the login button
document.querySelector("button.btn-success").addEventListener("click", function(event) {
    // Call the validateForm function when the button is clicked
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }


});