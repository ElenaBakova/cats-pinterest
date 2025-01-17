const catsApiKey = import.meta.env.VITE_CATS_API_KEY;

const fetchMoreCats = async () => {
    console.log('Fetching more cats...');
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=smalls&limit=20&mime_types=jpg&api_key=${catsApiKey}`, {
        method: 'GET'
    });
    if (response.ok) {
        return response;
    }
    return Promise.reject(`An error occured while fetching cats: ${response.status}`);
}

export {fetchMoreCats}