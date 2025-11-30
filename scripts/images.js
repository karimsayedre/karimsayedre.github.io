function renderImages(path, images, container, imagesPerRow, fillScreen = false) {
  // Loop through the images array
  images.forEach(function (image, index) {
    // Create a unique id for each image and modal
    var modalId = 'modal' + (index + 1);

    // Create a div element for the column
    var col = document.createElement('div');
    col.className = 'col-md-6 col-sm-12 col-lg-' + (12 / imagesPerRow);

    // Create an img element for the thumbnail
    var img = document.createElement('img');
    img.src = path + image;
    img.className = 'img-thumbnail';
    img.setAttribute('data-toggle', 'modal');
    img.setAttribute('data-target', '#' + modalId);

    // Create a div element for the modal
    var modal = document.createElement('div');
    modal.className = 'modal faded';
    modal.id = modalId;
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', modalId + '-label');
    modal.setAttribute('aria-hidden', 'true');

    // Create a div element for the modal dialog
    var modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';
    modalDialog.setAttribute('role', 'document');

    // Create a div element for the modal content
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create a div element for the modal body
    var modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    // Create an img element for the full size image
    var modalImg = document.createElement('img');
    modalImg.src = path + image;
    if (fillScreen)
      modalImg.className = 'big-image';

    // Create an i element for the previous icon
    var leftArrow = document.createElement('img');
    leftArrow.className = 'left-arrow';
    leftArrow.src = "icons/arrow.png";

    // Create an i element for the next icon
    var rightArrow = document.createElement('img');
    rightArrow.src = "icons/arrow.png";
    rightArrow.className = 'right-arrow';

    // Create a div element for the previous button
    var leftDiv = document.createElement('div');
    leftDiv.className = 'nav-btn left-div';
    leftDiv.onclick = function () {
      // Get the current image filename
      var currentFilename = decodeURIComponent(modalImg.src.split("/").pop());
      // Get the current image index
      var currentIndex = images.indexOf(currentFilename);
      // Calculate the previous image index
      var prevIndex = (currentIndex - 1 + images.length) % images.length;
      // Change the src of the modalImg to the previous image
      modalImg.src = path + images[prevIndex];
    };

    // Create a div element for the next button
    var rightDiv = document.createElement('div');
    rightDiv.className = 'nav-btn right-div';
    rightDiv.onclick = function () {
      // Get the current image filename
      var currentFilename = decodeURIComponent(modalImg.src.split("/").pop());
      // Get the current image index
      var currentIndex = images.indexOf(currentFilename);
      // Calculate the next image index
      var nextIndex = (currentIndex + 1) % images.length;
      // Change the src of the modalImg to the next image
      modalImg.src = path + images[nextIndex];
    };

    leftDiv.appendChild(leftArrow);
    rightDiv.appendChild(rightArrow);

    // Append the elements to their parents
    modalBody.appendChild(leftDiv);
    modalBody.appendChild(modalImg);
    modalBody.appendChild(rightDiv);

    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalBody);

    modal.appendChild(modalDialog);
    col.appendChild(img);
    col.appendChild(modal);

    // Check if it's the first image in the row
    if (index % imagesPerRow === 0) {
      // Create a div element for the row
      var row = document.createElement('div');
      row.className = 'row';
      // Append the row to the container
      container.appendChild(row);
    }

    // Get the last row element
    var lastRow = container.lastElementChild;
    // Append the column to the last row
    lastRow.appendChild(col);

    $('#' + modalId).on('hidden.bs.modal', function () {
      modalImg.src = path + images[index];
    });
  });
}
