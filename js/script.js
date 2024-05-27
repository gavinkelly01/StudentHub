function toggleAccordion(id) {
  var content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.read-more-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const collapsibleContent = this.nextElementSibling;

      if (collapsibleContent.style.display === 'block') {
        collapsibleContent.style.display = 'none';
        this.textContent = 'Read More';
      } else {
        collapsibleContent.style.display = 'block';
        this.textContent = 'Read Less';
      }
    });
  });
});
