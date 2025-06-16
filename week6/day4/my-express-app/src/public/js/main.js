document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle success (e.g., display a message or update the UI)
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error (e.g., display an error message)
            });
        });
    }

    // Additional client-side functionality can be added here
});