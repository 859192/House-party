document.getElementById('chefService').addEventListener('click', () => {
    fetch('http://localhost:3000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'Chef',
        imgUrl: 'chef.jpg'
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
