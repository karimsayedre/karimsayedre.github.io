
function addBehaviour() {
    // Get all the images that should trigger a modal
    var images = document.querySelectorAll('.preview-thumbnail');

    // Loop through the images and add a click event listener to each one
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            // Get the id of the modal to show from the data-target attribute of the image
            var targetModal = this.getAttribute('data-target');
            // Get the modal element by its id
            var modal = document.querySelector(targetModal);
            // Show the modal by changing its display property to "block"
            modal.style.display = "block";
        });
    });

    // Get all the close buttons in the modals
    var closeButtons = document.querySelectorAll('.close');

    // Loop through the close buttons and add a click event listener to each one
    closeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Get the modal element that contains the close button
            var modal = this.parentElement.parentElement.parentElement;
            // Hide the modal by changing its display property to "none"
            modal.style.display = "none";
        });
    });
}

function calculateYearsSince(month, year) {
    const startDate = new Date(year, month - 1); // JavaScript months are 0-based
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < startDate.getDate())) {
        return years - 1;
    }
    return years;
}