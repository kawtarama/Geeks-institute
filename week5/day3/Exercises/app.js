const fetchBtn = document.getElementById('fetch-btn');
const characterInfoDiv = document.getElementById('character-info');

const BASE_URL = "https://www.swapi.tech/api/people/";

async function getCharacter(id) {
  try {
    // Show loading spinner
    characterInfoDiv.innerHTML = `
      <div class="loading">
        <i class="fas fa-spinner fa-spin"></i> Loading...
      </div>
    `;

    // Fetch character data
    const response = await fetch(`${BASE_URL}${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const character = data.result.properties;

    // Fetch homeworld data (homeworld is a URL)
    const homeworldResponse = await fetch(character.homeworld);
    if (!homeworldResponse.ok) throw new Error('Failed to fetch homeworld');
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;

    // Display character info
    characterInfoDiv.innerHTML = `
      <h2>${character.name}</h2>
      <div class="info-item"><strong>Height:</strong> ${character.height} cm</div>
      <div class="info-item"><strong>Gender:</strong> ${character.gender}</div>
      <div class="info-item"><strong>Birth Year:</strong> ${character.birth_year}</div>
      <div class="info-item"><strong>Homeworld:</strong> ${homeworldName}</div>
    `;
  } catch (error) {
    characterInfoDiv.innerHTML = `
      <div class="error">Error fetching character info. Please try again.</div>
    `;
    console.error(error);
  }
}

fetchBtn.addEventListener('click', () => {
  const randomId = Math.floor(Math.random() * 83) + 1; // random number 1-83
  getCharacter(randomId);
});
