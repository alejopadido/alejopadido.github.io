document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closePopupButton = document.getElementById('close-popup');

    // Function to open the popup with project details
    function openPopup(projectDetails) {
        // Clear previous content
        popupContent.innerHTML = '';

        // Add new content
        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = projectDetails;
        popupContent.appendChild(detailsDiv);

        // Show the popup
        popup.classList.remove('hidden');
    }

    // Function to close the popup
    function closePopup() {
        popup.classList.add('hidden');
    }

    // Attach click event listeners to each project
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectDetails = project.querySelector('.project-details').innerHTML;
            openPopup(projectDetails);
        });
    });

    // Attach click event listener to the close button of the popup
    closePopupButton.addEventListener('click', closePopup);
});
