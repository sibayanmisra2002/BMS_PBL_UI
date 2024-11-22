document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const acknowledgment = document.getElementById('acknowledgment');
    const employeeIdField = document.getElementById('employeeId');
    const ackEmployeeId = document.getElementById('ackEmployeeId');
    const ackCustomerName = document.getElementById('ackCustomerName');
    const ackEmail = document.getElementById('ackEmail');

    // Generate a random 7-digit Employee ID
    const generateEmployeeId = () => {
        return Math.floor(1000000 + Math.random() * 9000000);
    };

    // Set the Employee ID field
    employeeIdField.value = generateEmployeeId();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Display acknowledgment
        ackEmployeeId.textContent = employeeIdField.value;
        ackCustomerName.textContent = `${firstName} ${lastName}`;
        ackEmail.textContent = email;
        acknowledgment.classList.remove('hidden');
    });
});
