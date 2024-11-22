// Delete Customer Form
const deleteCustomerForm = document.getElementById('deleteCustomerForm');
const deleteSuccess = document.getElementById('deleteSuccess');
const deleteError = document.getElementById('deleteError');

// Hide success and error messages initially
deleteSuccess.classList.add('hidden');
deleteError.classList.add('hidden');

deleteCustomerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate success or error response
    const isSuccess = Math.random() > 0.5; // Randomly determine success or error

    if (isSuccess) {
        deleteSuccess.classList.remove('hidden'); // Show success message
        deleteError.classList.add('hidden'); // Hide error message
    } else {
        deleteError.classList.remove('hidden'); // Show error message
        deleteSuccess.classList.add('hidden'); // Hide success message
    }
});