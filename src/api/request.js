const request = {
    ApiFetchGet: (url, options) => {
        return fetch(url, {
            methodL: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(response => response.json());
    }
};

export default request;