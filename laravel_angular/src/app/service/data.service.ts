import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/produits/index');
  }

  insertData(data : any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/produits/create', data);
  }

  destroyData(id : any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/produits/destroy/'+id);
  }

  show(id : any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/produits/show/'+id);
  }

  updateData(id : any, data : any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/produits/update/'+id, data);
  }

}
