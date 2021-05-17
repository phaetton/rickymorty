import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  baseurl: string;
  constructor(private httpclient: HttpClient) {
    this.baseurl = 'https://rickandmortyapi.com/api';
  }

  getAll(pPage=1): Promise<any[]> {
return this.httpclient.get<any[]>(`${this.baseurl}/character/?page=${pPage}`).toPromise();
  }


}
