import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommrciauxdataService {

  constructor(private httpclient:HttpClient) { }

  // retouner tous les commerciaux
  getData(){
    return this.httpclient.get('http://127.0.0.1:8000/api/employees');
  }

  // enregistrer les comerciaux
  insertData(id: any, data: any){
    return this.httpclient.post('paiecashapi.com/api/salesmens/' + id, data);
  }

  // supprimer un commercial
  deleteData(id: any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/deleteemployee/' + id);
  }
}
