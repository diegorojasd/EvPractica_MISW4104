import { Component } from '@angular/core';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListarVehiculosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evpractica_misw4104';
}
