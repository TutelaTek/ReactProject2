import http from "../http-common";

class RestaurantData {

    // http request
    getAll() {
        return http.get('/books');
    }
    getOne(id) {
        return http.get('/book/'+ id);
    }

    postBook(newItem){
        return http.post('/createBook', newItem)
    }

    edit_book(newItem){
        
        const id = newItem._id;
        const { _id, ...newResponse } = newItem;
        console.log(newResponse)
        return http.put('/updateBook/' + id , newResponse )
      
    }

    delete(id)
    {
        
        const idObject = {
            id: id
          }
          console.log(idObject);
        return http.post('/deleteBook', idObject);
    }
}

export default new RestaurantData();