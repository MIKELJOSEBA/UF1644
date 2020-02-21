import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {
    console.trace('constructor NoticiasService')
  }// constructor

  getAll(): Observable<Noticia[]> {
    const url = 'http://localhost:3000/noticias';
    console.trace('GET ALL ' + url);
    return this.http.get<Noticia[]>(url);
  }

  getById(id: number): Observable<Noticia> {
    const url = `http://localhost:3000/noticias/${id}`;
    console.trace('GET ALL ' + url);
    return this.http.get<Noticia>(url);
  }
} // NoticiasService
