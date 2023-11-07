const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Country } = require("./src/db.js");
const jsonData = require('./api/db.json');
const PORT = 3001;



// Función para cargar datos de la API a la base de datos
async function loadApiDataToDatabase() {
  try {
    // Realiza una solicitud a la API para obtener los datos
    // const response = await axios.get('./api/db.json'); // Reemplaza 'URL_DE_TU_API' por la URL real de la API

    // Procesa los datos de la API y guárdalos en la base de datos
    // const countriesData = response.data.countries; // Asegúrate de acceder a los datos de la API según su estructura
    for (const countryData of jsonData.countries) {
      await Country.create({
        id: countryData.cca3, // Ajusta esto según la estructura de los datos de la API
        name: countryData.name.common,
        imageFlag: countryData.flags.png,
        continent: countryData.region,
        capital: countryData.capital ? countryData.capital[0]: "No especifica capital",
        subregion: countryData.subregion,
        area: countryData.area,
        population: countryData.population,
      });
    }
    console.log('Datos de la API cargados en la base de datos');
  } catch (error) {
    console.error('Error al cargar los datos de la API en la base de datos:', error);
  }
}

// Inicia el servidor y carga los datos de la API al arrancar

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await loadApiDataToDatabase(); // Carga los datos al iniciar el servidor

    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
