import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule]
})
export class AppComponent implements OnInit {
  title = 'inventario-app';

  ngOnInit() {
    console.log('Angular cargó correctamente');
  }
}