import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5009c.firebaseio.com/'
})

export default instance;