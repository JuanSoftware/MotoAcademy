import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, observable } from 'rxjs';
import { Alunos } from 'src/app/interfaces/alunos-interface';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api:string = "http://localhost:3000"

constructor() { }

  getAlunos() : Observable<any> {

  let headers ={
      'Content-type':'application/json',
      'Access-Control-Allow-Origion': 'http://localhost:3000/'
  }

    return new Observable((observer) => {
      axios.get(this.api + "/alunos")
        .then((response) => {
          observer.next(response.data);

        })
        .catch((error) => {
          observer.error(error);
        })
    })
  }

  insertAlunos(data: Alunos): Observable<any> {
    return new Observable((observer) =>{
      axios.post(this.api + "/alunos")
      .then((response) =>{
        observer.next(response.data);

      })
      .catch((error) => {
        observer.error(error);
      })

    })
  }
}
