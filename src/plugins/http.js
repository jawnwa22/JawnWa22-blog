/*
 * Created Date: 2019-06-06
 * Author: DarkReunion
 * @description 导出axios对象
 * @use
 *
 * Copyright (c) 2019 19cm_without_head Team
 */

import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

let config = {
    baseURL: process.env.VUE_APP_BASEURL || process.env.apiUrl || "",
    timeout: 60 * 1000 // Timeout
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        let code = response.data.code;
        // success为请求成功的响应码
        if (code === 'success') {
            if (response.data.data) {
                return response.data.data;
            }
            return response.data;
        }
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default _axios;