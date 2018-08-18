import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: Routes = routes;
  title = 'app';
}
