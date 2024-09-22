document
  .getElementById("download-profile-cv")
  .addEventListener("click", function () {
    // Create an anchor element
    var link = document.createElement("a");
    link.href = "assets/cv-nguyenkhacbinh.pdf";
    link.download = "cv-nguyenkhacbinh.pdf";
    link.click();
  });
