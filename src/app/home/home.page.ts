import { Component } from '@angular/core';
import { IonThumbnail,IonButtons,IonImg,IonButton, IonIcon,IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { OpenmapService } from '../servicios/openmap.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline,airplaneOutline} from 'ionicons/icons';
import { NavController } from '@ionic/angular/standalone';// agregado
import { Categoria } from '../Modelo/categoria';
import { RouterModule } from '@angular/router';
import { ValorviajePage } from '../paginas/valorviaje/valorviaje.page';
import { Photo,Camera,CameraResultType } from '@capacitor/camera';
import { ViajeService } from '../servicios/viaje.service';
import { ModalController } from '@ionic/angular/standalone';
import { destinos } from '../paginas/destinos/destinos.page';
import { IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonModal,IonThumbnail,ValorviajePage,RouterModule,IonButtons, IonImg,IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonLabel, IonList, IonItem, CommonModule],
})
export class HomePage {

  Lugares: any[] = [];
  
  constructor(
    private servicio: OpenmapService,
    private servicios: ViajeService,
    private modalCtrl:ModalController
  ){
    addIcons({airplaneOutline,
             cameraOutline,
             trashOutline,
             addCircleOutline})
  }

  async SacarLugar(lugar: any) {
    const modal = await this.modalCtrl.create({
      component: destinos,
      componentProps: { Eliminarlu: lugar }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data && data.confirmado) {
      const index = this.Lugares.indexOf(data.destino);
      if (index > -1) {
        this.Lugares.splice(index, 1);
      }}}


  ngOnInit() {
    this.Lugares = this.servicios.getLugareSALL();
    this.Lugares = this.servicios.LugaresPredeterminado;
    
  }
}