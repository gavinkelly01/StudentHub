function createEventListItem(event) {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${event.name}</h3>
    <p><strong>Date:</strong> ${event.start_time}</p>
    <p><strong>Description:</strong> ${event.description}</p>
    <p><strong>Link:</strong> <a href="${event.link}" target="_blank">${event.link}</a></p>
    <img src="${event.thumbnail}" alt="Event Thumbnail">
  `;
  return li;
}

function displayEvents(events) {
  const eventsList = document.getElementById('events-list');
  eventsList.innerHTML = '';
  if (events && events.length > 0) {
    events.forEach(event => {
      eventsList.appendChild(createEventListItem(event));
    });
  } else {
    eventsList.innerHTML = '<li>Nothing found.</li>';
  }
}

const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const eventType = this.dataset.type;
    let query;
    if (eventType === 'all') {
      query = 'Dublin%2C Ireland'; // Original query
    } else {
      query = encodeURIComponent(eventType + ' in Dublin, Ireland');
    }

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          console.log('API request successful');
          if (this.responseText) {
            try {
              const eventData = JSON.parse(this.responseText);
              console.log('Event data:', eventData);
              if (eventData.data && Array.isArray(eventData.data)) {
                displayEvents(eventData.data);
              } else {
                console.error('Error: No events data found or invalid format.');
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          } else {
            console.error('Error: Empty response');
          }
        } else {
          console.error('Error:', this.status, this.statusText);
        }
      }
    });

    xhr.open('GET', `https://real-time-events-search.p.rapidapi.com/search-events?query=${query}&date=week&is_virtual=false&start=0`);
    xhr.setRequestHeader('x-rapidapi-key', '2eb5cd8497msh5be56428e76bf3cp178951jsn9cd8ff7ee01f');
    xhr.setRequestHeader('x-rapidapi-host', 'real-time-events-search.p.rapidapi.com');

    xhr.send();
  });
});
