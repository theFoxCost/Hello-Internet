// Select all sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Optionally, prevent default behavior if needed
        // e.g., prevent navigation if the link is a placeholder
        // event.preventDefault();
    });
});
