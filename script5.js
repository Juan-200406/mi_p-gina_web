document.addEventListener('DOMContentLoaded', () => {
    const imageUrlInput = document.getElementById('imageUrl');
    const addImageBtn = document.getElementById('addImageBtn');
    const deleteImageBtn = document.getElementById('deleteImageBtn');
    const imageGallery = document.getElementById('imageGallery');
    
    let selectedImage = null;

    // Function to add a new image to the gallery
    const addImage = (url) => {
        if (!url) {
            alert('Por favor, introduce una URL de imagen válida.');
            return;
        }

        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item', 'entering'); // Add 'entering' class for animation

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagen de la galería';
        img.onerror = () => {
            alert('No se pudo cargar la imagen. Por favor, verifica la URL.');
            imageItem.remove(); // Remove the div if image fails to load
        };

        imageItem.appendChild(img);
        imageGallery.appendChild(imageItem);

        // Add event listener for selecting images
        imageItem.addEventListener('click', () => {
            if (selectedImage) {
                selectedImage.classList.remove('selected');
            }
            imageItem.classList.add('selected');
            selectedImage = imageItem;
        });

        // Clear the input field after adding
        imageUrlInput.value = '';
    };

    // Event listener for the "Agregar Imagen" button
    addImageBtn.addEventListener('click', () => {
        const url = imageUrlInput.value.trim();
        addImage(url);
    });

    // Event listener for adding image on Enter key press in the input field
    imageUrlInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const url = imageUrlInput.value.trim();
            addImage(url);
        }
    });

    // Event listener for the "Eliminar Imagen Seleccionada" button
    deleteImageBtn.addEventListener('click', () => {
        if (selectedImage) {
            // Add 'leaving' class for animation
            selectedImage.classList.add('leaving');
            selectedImage.addEventListener('animationend', () => {
                selectedImage.remove();
                selectedImage = null; // Deselect after removal
            }, { once: true }); // Ensure the event listener runs only once
        } else {
            alert('Por favor, selecciona una imagen para eliminar.');
        }
    });
});