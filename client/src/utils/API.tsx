import axios from "axios";

export default {
  search: function(search: string) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  }, 
  getBooks: function() {
    return axios.get("/api/books");
  }, 
  getBook: function(id: string){
    return axios.get("/api/books/" + id);
  }, 
  deleteBook: function(id: string) {
    return axios.delete("/api/books/" + id);
  }, 
  saveBook: function(data: any) {
    return axios.post("/api/books/", data);
  }
};

