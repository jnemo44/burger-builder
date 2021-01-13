import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a412d-default-rtdb.firebaseio.com/'
});

export default instance;