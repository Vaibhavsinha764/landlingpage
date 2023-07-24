document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // You can add your own logic here, e.g., sending the data to a server using AJAX.
  
    alert('Thank you for your submission!');
  });
  