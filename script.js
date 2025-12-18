document.addEventListener("DOMContentLoaded", () => {

    // ----------------- Form Validation Function -----------------
    function validateForm(event) {
        event.preventDefault(); // منع الإرسال الفعلي للـ form

        // ----------------- DOM Elements -----------------
        const form = document.getElementById("registration-form");
        const feedbackDiv = document.getElementById("form-feedback");

        // ----------------- Retrieve Inputs -----------------
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // ----------------- Validation -----------------
        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // ----------------- Display Feedback -----------------
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    }

    // ----------------- Event Listener -----------------
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", validateForm);

});
