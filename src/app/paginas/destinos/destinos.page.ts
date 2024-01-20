import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { IonModal} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OpenmapService } from 'src/app/servicios/openmap.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
  standalone: true,
  imports: [RouterModule, IonicModule, CommonModule, FormsModule]
})
export class destinos implements OnInit {    // acá cambiamos a destinos
  @ViewChild(IonModal) modal!: IonModal;
  @Input() DeletePlace: any; // Destino a eliminar

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  confirmarEliminacion() {
    this.modalCtrl.dismiss({ confirmado: true, destino: this.DeletePlace });
  }

  cerrarModal() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
