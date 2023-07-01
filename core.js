function togglecontactform() {
    var x = document.getElementById("slideout");
    if (x.classList > "slideout") {
      x.classList.toggle = "none";
      // bo dy должен быть overflow: hidden
    } else {
      x.style.display = "block";
    }
  } 