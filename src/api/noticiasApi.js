import axios from 'axios';

export const noticiasApi = axios.create({
    baseURL: 'http://20.42.104.231/FidelitasNewsBackend/api/noticias'
})