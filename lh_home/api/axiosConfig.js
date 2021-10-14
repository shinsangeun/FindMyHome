import axios from "axios";

const instance = axios.create({
    baseURL: 'https://apis.data.go.kr',
    timeout: 1000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});

