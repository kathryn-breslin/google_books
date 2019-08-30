import axios from "axios";

export default {
    search: function(search: string) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
    }
};