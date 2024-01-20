import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonModal,IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel,IonItem, IonList, IonButton, IonToolbar, IonHeader, IonTitle, IonIcon, NavParams} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { OpenmapService } from 'src/app/servicios/openmap.service';
import { RouterModule } from '@angular/router';
import { Camera,Photo, CameraResultType } from '@capacitor/camera';
import { ViajeService } from 'src/app/servicios/viaje.service';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline, airplaneOutline } from 'ionicons/icons';
import { Route } from '@angular/router';

@Component({
  selector: 'app-valorviaje',
  templateUrl: './valorviaje.page.html',
  styleUrls: ['./valorviaje.page.scss'],
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,IonButtons,IonModal,IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel,IonItem, IonList, IonButton, IonToolbar, IonHeader, IonTitle, IonIcon]
})
export class ValorviajePage implements OnInit {
  Valores: number[] = [];
  newcantidad: number | undefined;

    foto: Photo | null = null;
    addedPlaces: any[] = [];
    showAddedPlaces = false; 
  
  
    constructor(
      private servicio: ViajeService,
      private servicio2: OpenmapService,
      
    ){
      addIcons({airplaneOutline,
               cameraOutline,
               trashOutline,
               addCircleOutline})
    }
  
  AgregarLugar(lugar: any) {
      this.servicio.Agregarlu(lugar);
      this.addedPlaces.push(lugar);
      this.showAddedPlaces = true;
      
    }

    AddCantidad(): void {
      if (!isNaN(parseFloat(this.newcantidad as any)) && isFinite(this.newcantidad as any)) {
        this.Valores.push(parseFloat(this.newcantidad as any));
        this.newcantidad = undefined;
      } else {
        alert('Ingresa un valor numérico válido.');
      }
    }
  
  async handleInput(event: any) {
    await this.servicio.handleInput(event);
  }
  
  get places() {
    return this.servicio.Lugares;
  }
  
  async TomarFoto(){
    this.foto =await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      saveToGallery:true,
      correctOrientation: true
    })
  }
  async eliminarDireccion() {
    for (const lugar of this.addedPlaces) {
      await this.servicio.Eliminarlu(lugar);
    }
  
    this.addedPlaces = [];
  
   
    this.showAddedPlaces = false;
  }
  
  
    ngOnInit() {}
  
  }