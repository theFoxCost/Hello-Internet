// Add this to your script.js file
document.getElementById('toggleSidebar').addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
});
