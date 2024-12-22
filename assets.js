<script>
    const journeyBoard = document.getElementById('journeyBoard');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        journeyBoard.classList.toggle('expanded');

        if (journeyBoard.classList.contains('expanded')) {
            toggleButton.innerHTML = '&#8592;'; 
        } else {
            toggleButton.innerHTML = '&#8594;'; 
        }
    {"}"});
</script>
