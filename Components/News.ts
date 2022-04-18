import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=017733313db64302af29a128226c3ed2'
})