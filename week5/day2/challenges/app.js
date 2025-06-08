const form = document.getElementById('gif-form');
const input = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all-btn');

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const category = input.value.trim();
  if (!category) return;

  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(category)}&api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    // Extract the gif URL
    const gifUrl = data.data.images.original.url;
    appendGif(gifUrl);
  } catch (error) {
    console.error("Error fetching gif:", error);
    alert("Failed to fetch gif. Please try again.");
  }

  form.reset();
});

function appendGif(url) {
  // Create gif container div
  const gifDiv = document.createElement('div');
  gifDiv.classList.add('gif-item');

  // Create img element
  const img = document.createElement('img');
  img.src = url;
  img.alt = "Random gif";

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'DELETE';
  deleteBtn.addEventListener('click', () => {
    gifDiv.remove();
  });

  // Append img and button to gifDiv
  gifDiv.appendChild(img);
  gifDiv.appendChild(deleteBtn);

  // Append gifDiv to main container
  gifContainer.appendChild(gifDiv);
}

deleteAllBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});
