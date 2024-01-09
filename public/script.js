console.log('hola mundo')
document.getElementById("clientForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    const formData = new FormData(this); // Obtener datos del formulario
    const data = {};
    formData.forEach((value, key) => { // Convertir FormData a objeto JSON
        data[key] = value;
    });

    // Realizar la solicitud POST a la API
    fetch('http://localhost:3000/client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta de la API
        console.log(data);
        alert("Cliente registrado exitosamente");
        // Puedes redirigir a otra página o realizar otras acciones después de registrar al cliente
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al registrar el cliente");
    });
});