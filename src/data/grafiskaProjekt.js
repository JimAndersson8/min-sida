const SERVER_URL = "http://localhost:3001/galleri/kategorier";

async function hamta(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const fel = new Error("Servern svarade med " + response.status);
    fel.status = response.status;
    throw fel;
  }

  return response.json();
}

export function hamtaKategorier() {
  return hamta(SERVER_URL);
}

export function hamtaKategori(slug) {
  return hamta(`${SERVER_URL}/${encodeURIComponent(slug)}`);
}
