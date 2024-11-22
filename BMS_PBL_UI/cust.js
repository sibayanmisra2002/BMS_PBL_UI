document.getElementById('editCustomerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const isSuccess = Math.random() > 0.5;
    document.getElementById('editSuccess').classList.toggle('hidden', !isSuccess);
    document.getElementById('editError').classList.toggle('hidden', isSuccess);
});

document.getElementById('registerCustomerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('registerSuccess').classList.remove('hidden');
});
