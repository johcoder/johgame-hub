import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"df59348f9c034993925bc4a21d41624b"

    }
})