
// Define a function to handle the API response
function handleApiResponse(data) {
    message = data.message
    dataInfo = data.data
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';
  
    // Loop through the data and create HTML elements to display it
    dataInfo.forEach(item => {
      const listItem = document.createElement('p');
      listItem.textContent = `ID: ${item.id}, Nombre: ${item.nombre}, Password: ${item.password}`;
      dataContainer.appendChild(listItem);
    });
  
  }
  
  // Define a function to handle the button click event
  document.getElementById('fetchDataBtn').addEventListener('click',function(event) {
    const xhr = new XMLHttpRequest();
    xhr.open('SELECT', 'http://localhost:9000/clientes', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        handleApiResponse(data);
      }
    };
  
    xhr.send();
  });
  
  document.getElementById('submitButton').addEventListener('click', function(event) {
    
    const nombre = document.getElementById('nombre_input').value;
    const password = document.getElementById('password_input').value;
  
    const data = {
        nombre: nombre,
        password: password,
    };
  
    // Make the AJAX request to your API endpoint
    fetch('http://localhost:9000/crear', {
      method: 'INSERT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      
    })
      .then(response => response.json())
      .then(result => {
        console.log("mensaje de API:", result.message);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  });
  
  
