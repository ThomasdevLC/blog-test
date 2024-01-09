export async function fetchActualites() {
  const url = "http://localhost:1337/api/articles?filters[tag][$eq]=Actualité&sort[0]=date:desc&populate=image";
  return fetchData(url);
}

export async function fetchInfos() {
  const url = "http://localhost:1337/api/articles?filters[tag][$eq]=Infos&sort[0]=date:desc&populate=image";
  return fetchData(url);
}

export async function fetchEvenements() {
  const url = "http://localhost:1337/api/articles?filters[tag][$eq]=Evénements&sort[0]=date:desc&populate=image";
  return fetchData(url);
}
export async function fetchMain() {
  const url = "http://localhost:1337/api/articles?filters[main][$eq]=true&populate=image";
  return fetchData(url);
}

export async function fetchRemaining() {
  const url = "http://localhost:1337/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image";
  return fetchData(url);
}

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Erreur:", error.message);
    throw error;
  }
}
