// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number!");
        return;
    }

    // Save data to Firebase
    saveMessages(name, mobile);

    // Clear form fields
    document.getElementById("loginForm").reset();

    // Show success message
    document.getElementById("successMessage").style.display = "block";
}

// Function to save the data to Firebase
function saveMessages(name, mobile) {
    var newLoginForm = loginFormDB.push();
    newLoginForm.set({
        name: name,
        mobile: mobile
    });
}
