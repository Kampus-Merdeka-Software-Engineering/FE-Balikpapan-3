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

 fetch('https://be-balikpapan-3-production.up.railway.app/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
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
