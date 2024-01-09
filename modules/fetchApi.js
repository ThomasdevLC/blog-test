export async function fetchData(url) {
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
