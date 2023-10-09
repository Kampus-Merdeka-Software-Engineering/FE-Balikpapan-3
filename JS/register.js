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
    window.location.href= "login.html";
}


// Menambahkan event listener untuk tombol Register
var registerButton = document.getElementById("registerselesai");
registerButton.addEventListener("click", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
    }

     fetch('https://be-balikpapan-3-production.up.railway.app/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrasi)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Step 2: Fetch JSON data after successful login
    return response.json();
  })
  .then(data => {
    // Handle the JSON data received from the server
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});
