import axios from "axios";

// base header for all http requests
export default axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "Content-type": "application/json"
    }
});