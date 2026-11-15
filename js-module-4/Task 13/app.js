async function fetchData() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.getElementById("target").textContent = data.value;
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();