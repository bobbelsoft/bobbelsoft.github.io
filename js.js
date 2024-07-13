document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});