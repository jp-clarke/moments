import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-jc-1-9b72471fed7c.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
