document.getElementById('registration-form').addEventListener('submit', function (event) {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');
    
    // Έλεγχος αν οι δύο κωδικοί είναι ίδιοι
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        event.preventDefault(); // Αποτρέπει την αποστολή της φόρμας
    }

    // Περιορισμός ηλικίας (π.χ. πρέπει να είναι τουλάχιστον 18 ετών)
    var dob = document.getElementById('dob').value;
    var age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18) {
        alert("You must be at least 18 years old to register.");
        event.preventDefault();
    }
});