function togglecontactform() {
    var x = document.getElementById("contact-container");
    if (x.classList > "contact-container") {
      x.classList.toggle = "none";
      // bo dy должен быть overflow: hidden
    } else {
      x.style.display = "block";
    }
  } 