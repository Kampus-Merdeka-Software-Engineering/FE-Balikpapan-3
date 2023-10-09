const API_URL = "https://be-balikpapan-3-production.up.railway.app";

// Function to validate the registration form
function validateForm() {
    var username = document.getElementById("InputUsername").value;
    var email = document.getElementById("Inputemail").value;
    var password = document.getElementById("InputPassword").value;
    var checkbox = document.getElementById("flexcheckbox").checked;

    // Validasi Username
    if (!username || username.trim() === "") {
        alert("Username harus diisi.");
        return false;
    }

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

    // Jika semua validasi berhasil, Anda dapat melanjutkan dengan proses registrasi
    //pindah ke halaman selanjutnya
    window.location.href= "indexLogin.html";
}


// Menambahkan event listener untuk tombol Register
var registerButton = document.getElementById("registerselesai");
registerButton.addEventListener("click", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
    }


    const userData = {
        name: username,
        email: email,
        password: password,
    };


    fetch(`${API_URL}/auth/daftar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the response JSON
        } else {
            throw new Error('Registration failed');
        }
    })
    .then(data => {        
        Swal.fire({
            icon: 'success',
            title: 'Good Job!',
            text: 'Account have been created!',
        }).then(() => {
            window.location.href = './index.html';
        });
    })
    .catch(error => {
        console.error('Registration failed', error);
    });
});
