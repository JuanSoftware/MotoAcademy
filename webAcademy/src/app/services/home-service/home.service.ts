import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api:string = "http://localhost:3000"

constructor() { }

  getAlunos() : Observable<any> {
    return new Observable((observer) => {
      axios.get(this.api)
        .then((response) => {
          observer.next(response.data);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error);
        })
    })
  }

}
