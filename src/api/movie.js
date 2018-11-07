import request from './request';
import {config} from '../utils/config';
const Api = {
    async getMovie() {
        try {
            let url = `${config.apiUrl}/movie/in_theaters`;
            const movie = await request.ApiFetchGet(url, {});
            if (movie.count > 0) {
                return movie.subjects;
            }
        } catch (e) {
            console.log('error', e);
        }
    }
};

export default Api;