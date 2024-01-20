import { Injectable } from '@angular/core';
import { ResultadoWSugerencias } from '../data/citas';
import { ResultadoWSDetalle } from '../data/citas';
import { Categoria } from '../Modelo/categoria';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenmapService {
 
  apiKey = "5ae2e3f221c38a28845f05b62f6aeb5a588a2c0b7a850946c1605dfc"
  baseUrl = "https://api.opentripmap.com/0.1/en/"

  constructor() { }

  async busqueda(bus:string): Promise<ResultadoWSugerencias>{
    const url = `${this.baseUrl}places/autosuggest?name=${bus}&radius=12742000&lon=-73.0336522&lat=-36.9248235&rate=3&limit=5&apikey=${this.apiKey}`;
    const result = await fetch(url)
    const data = await result.json()
    return data

  }

  async caracteristicas(caract:string): Promise<ResultadoWSDetalle>{
    const url = `${this.baseUrl}places/xid/${caract}?&apikey=${this.apiKey}`;
    const result = await fetch(url)
    const data = await result.json()
    return data


  }
}