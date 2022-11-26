import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://lado-c.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },

});

export default blogFetch;