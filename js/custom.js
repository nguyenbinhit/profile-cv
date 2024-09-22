let downloadInitiated = false;

document
  .querySelectorAll(".download-profile-cv, .download-profile-cv span")
  .forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor behavior
      if (!downloadInitiated) {
        downloadInitiated = true;
        // Create an anchor element
        var link = document.createElement("a");
        link.href = "assets/cv-nguyenkhacbinh.pdf";
        link.download = "cv-nguyenkhacbinh.pdf";
        link.click();
        // Reset the flag after a short delay to allow for subsequent downloads
        setTimeout(() => {
          downloadInitiated = false;
        }, 1000);
      }
    });
  });