<script>
    // JavaScript to handle toggling the journey board
    const journeyBoard = document.getElementById('journeyBoard');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        // Toggle the 'expanded' class on the journey board container
        journeyBoard.classList.toggle('expanded');

        // Change the arrow direction on the toggle button
        if (journeyBoard.classList.contains('expanded')) {
            toggleButton.innerHTML = '&#8592;'; // Left arrow
        } else {
            toggleButton.innerHTML = '&#8594;'; // Right arrow
        }
    {"}"});
</script>
