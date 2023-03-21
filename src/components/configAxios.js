import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://ladocapi.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },

});

export default blogFetch;