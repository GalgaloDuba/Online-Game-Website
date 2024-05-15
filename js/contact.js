/*<script>
    // Function to validate the form
    function validateForm() {
        var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if name, email, and message are not empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all required fields.");
    return false; // Prevent form submission
        }

    // Check if email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    return false; // Prevent form submission
        }

    // If all validations pass, allow form submission
    return true;
    }
</script>
*/