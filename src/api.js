import axios from 'axios';

const searchImages = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6HkMNQNRXwmXHujT41cL0qIlHdFYFAPoJ0CR6xB1HGs',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
