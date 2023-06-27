var acc = document.getElementsByClassName("accordion");
var i;
var prevActive = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
    if (prevActive !== null && prevActive !== this) {
      prevActive.classList.remove("active");
      prevActive.nextElementSibling.style.maxHeight = null;
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    
    prevActive = this.classList.contains("active") ? this : null;
  });
}
