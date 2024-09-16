function showContent(id) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Show the selected content
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

