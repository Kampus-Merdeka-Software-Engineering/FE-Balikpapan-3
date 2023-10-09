const API_URL = "https://be-balikpapan-3-production.up.railway.app";

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
    window.location.href= "index.html";
}


// Add an event listener to the login button
document.querySelector("button.btn-success").addEventListener("click", function(event) {
    // Call the validateForm function when the button is clicked
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }


   // Step 1: Send a POST request with login credentials
const loginData = {
    username: 'your_username',
    password: 'your_password'
  };

   
  const userData = {
    email: email,
    password: password,
};

  fetch(`${API_URL}/auth/masuk`, {
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
    console.log(data);
    localStorage.setItem('email', data.data.email);
    localStorage.setItem('id', data.data.id);

    Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'Berhasil Login!',
    })
    .then(() => {
        window.location.href = '../';
    });
})
.catch(error => {
    console.error('Registration failed', error);
});
});
