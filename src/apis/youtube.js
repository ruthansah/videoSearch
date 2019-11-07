import axios from 'axios';

const KEY = 'AIzaSyDBqiQxdZaRlbQhtwZ9I7LGRLmzcatLzYA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});