// Código original de conexión a la api de youtube desde rapidapi.com

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'de2189e36dmsh3fc094ac81b392fp111fc5jsn3c12e99cb776',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=10', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// Código modificado para implementar Async away
const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=10";

const content = null || document.getElementById('content');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "de2189e36dmsh3fc094ac81b392fp111fc5jsn3c12e99cb776",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// Creamos una función que se llama así misma, incluimos la lógica necesaria para hacer el llamado a la API, obtener los elementos y mostrarlos en HTML
(async () => {
  try {
    const videos = await fetchData(API);
    // Creamos un template en html que adaptamos para que itere por cada uno de los elementos de la respuesta y lo presentamos en nuestro html (En la sección content de index html esta el código que nos traemos línea 66 lo copiamos aca y lo borramos del html), al div que contenia la información le damos un id=content
    let view = `
    ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
    `).slice(0,4).join('')}    
    `;
  } catch (error) {}
})();
