import axios from 'axios';

export default async function getPosts(limit?: number | undefined) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts${limit ? `?_limit=${limit}` : '?_limit=10'}`,
    );
    return response.data;
}
