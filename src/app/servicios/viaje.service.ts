import { Injectable } from '@angular/core';
import { OpenmapService } from './openmap.service';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  Lugares: any[] = [];

  LugaresPredeterminado: any[] = [];

  private busquedal: any[] = [];
  

  constructor(
    private servicio: OpenmapService
  ) { }



  Agregarlu(lugar: any) {
    console.log("Añadiendo lugar:", lugar);
    this.LugaresPredeterminado.push(lugar);
  }


  Eliminarlu(lugar: any) {
    const index = this.LugaresPredeterminado.indexOf(lugar);
    if (index > -1) {
      this.LugaresPredeterminado.splice(index, 1);
    }}

  
    getLugareSALL() {
      return [...this.LugaresPredeterminado, ...this.busquedal];
    }
  
  
    ADDbusqueda(lugar: any) {
      this.busquedal.push(lugar);
    }
  
  
  

  BuscarLugar() {
    return this.busquedal;
  }

  

  getlugarPredeterminado() {
    return this.LugaresPredeterminado;
  }


  async handleInput($event: any) {
    const ter = $event.detail.value;
    const searchResults = await this.servicio.busqueda(ter);
    this.busquedal = [];
    this.Lugares = [];
      for (const Det of searchResults.features) {
    const placeDetails = await this.servicio.caracteristicas(Det.properties.xid);
    this.Lugares.push({
        name: Det.properties.name,
        image: placeDetails.preview?.source
      });
    }
  }

  

}