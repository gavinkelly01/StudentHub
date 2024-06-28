function toggleAccordion(id) {
  var content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

const pages = [
  { url: 'index.html', content: 'Home Page Welcome to the Dublin Student Hub where you can find all fun and important information here. Click the button below to see other content.' },
  { url: 'about.html', content: 'About Page Learn more about Dublin Student Hub and what we offer to students.' },
  { url: 'services.html', content: 'Services Page Discover the various services provided by Dublin Student Hub.' },
  { url: 'contact.html', content: 'Contact Page Get in touch with us for any inquiries or support.' },
  { url: 'blog.html', content: 'Blog Page Read our latest blog posts and updates.' },
  { url: 'nightlife.html', content: 'Nightlife Events Page Explore the vibrant nightlife events happening around Dublin.' },
  { url: 'concerts.html', content: 'Concerts Events Page Check out the upcoming concerts in Dublin.' },
  { url: 'entertainment.html', content: 'Entertainment Events Page Find entertainment options to enjoy in Dublin.' },
  { url: 'accommodation.html', content: 'Accommodation Finance Page Get information about student accommodation options in Dublin.' },
  { url: 'student-grants.html', content: 'Student Grants Finance Page Learn about the grants available for students.' },
  { url: 'cost-of-living.html', content: 'Cost of Living Guides Finance Page Understand the cost of living in Dublin with our guides.' },
  { url: 'employment.html', content: 'Employment Finance Page Find out about job opportunities for students in Dublin.' },
  { url: 'health.html', content: 'Health Page Access resources for maintaining your health and well-being.' },
  { url: 'mental-health.html', content: 'Mental Health Page Find support and information on mental health.' },
  { url: 'sex-relationships.html', content: 'Sex & Relationships Page Get advice and information on sex and relationships.' },
  { url: 'lgbtia.html', content: 'LGBTIA+ Page Find resources and support for the LGBTIA+ community.' },
  { url: 'college-resources.html', content: 'College Resources Page Access a variety of resources for college students.' },
  { url: 'local-organisations.html', content: 'Local Organisations Page Learn about local organisations supporting students.' },
  { url: 'healthcare-information.html', content: 'Healthcare Information Page Find healthcare information for students.' },
];
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }

  const navigationLinks = document.querySelectorAll('[data-page]');
  if (navigationLinks) {
    navigationLinks.forEach(link => {
      link.addEventListener('click', navigateTo);
    });
  }
});

function performSearch() {
  const query = document.getElementById('search-input').value.trim();
  if (query !== '') {
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
  } else {
    alert('Please enter a search query.');
  }
}

function navigateTo(event) {
  const page = event.target.dataset.page;
  if (page) {
    window.location.href = `${page}.html`;
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


function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('contact-form');
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Form submission failed. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}
