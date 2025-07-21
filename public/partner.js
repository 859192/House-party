document.getElementById("role").addEventListener("change", showFieldsBasedOnRole);
document.getElementById("partnerForm").addEventListener("submit", submitForm);

function showFieldsBasedOnRole() {
    const role = document.getElementById("role").value;

    // Hide all role-specific fields initially
    document.getElementById("chefFields").classList.add("hidden");
    document.getElementById("bartenderFields").classList.add("hidden");
    document.getElementById("waiterFields").classList.add("hidden");

    // Show the relevant fields based on the role selected
    if (role === "chef") {
        document.getElementById("chefFields").classList.remove("hidden");
    } else if (role === "bartender") {
        document.getElementById("bartenderFields").classList.remove("hidden");
    } else if (role === "waiter") {
        document.getElementById("waiterFields").classList.remove("hidden");
    }
}

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const role = document.getElementById("role").value;

    let experience = "";
    let salary = "";
    let skills = "";

    if (role === "chef") {
        experience = document.getElementById("chefExperience").value;
        salary = document.getElementById("chefSalary").value;
        skills = document.getElementById("chefSkills").value;
    } else if (role === "bartender") {
        experience = document.getElementById("bartenderExperience").value;
        salary = document.getElementById("bartenderSalary").value;
        skills = document.getElementById("bartenderSkills").value;
    } else if (role === "waiter") {
        experience = document.getElementById("waiterExperience").value;
        salary = document.getElementById("waiterSalary").value;
    }

    // Save data to Firebase
    saveMessages(name, mobile, role, experience, salary, skills);

    // Clear form fields
    document.getElementById("partnerForm").reset();

    // Hide all dynamic fields
    showFieldsBasedOnRole(); // Reset hidden fields

    // Show success message
    document.getElementById("successMessage").style.display = "block";
}

// Function to save the data to Firebase
function saveMessages(name, mobile, role, experience, salary, skills) {
    var newPartnerForm = partnerFormDB.push();
    newPartnerForm.set({
        name: name,
        mobile: mobile,
        role: role,
        experience: experience,
        salary: salary,
        skills: skills
    });
}
