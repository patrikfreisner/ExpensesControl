import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    public http: HttpClient
  ) {

  }

  getCepInfo(cep: string): Observable<any> {
    return this.http.get<any>("https://viacep.com.br/ws/" + cep + "/json", { observe: 'response' });
  }

  getBrazilCountry(): Observable<any> {
    return this.http.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados", { observe: 'response' });
  }

  getStateCity(state: string): Observable<any> {
    return this.http.get<any>("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + state + "/distritos", { observe: 'response' });
  }
}
